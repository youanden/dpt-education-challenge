import * as React from "react"
import { css } from "glamor"

/**
 * TYPES
 */

type StyleConfig = {
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  contentProps?: React.HTMLAttributes<HTMLDivElement>
  menuItemProps?: React.HTMLAttributes<HTMLLIElement>
  menuItemSelectedProps?: React.HTMLAttributes<HTMLLIElement>
  menuProps?: React.HTMLAttributes<HTMLUListElement>
  menuItemAfter?: React.ReactNode
}

type Directions = "LEFT" | "RIGHT"

type Props = {
  // your props
  tolerance?: number
  direction?: Directions
  data: Section[]
  styleConfig: StyleConfig
  onExit?: () => void
  label?: string
}
type State = {
  // your states
  activeRow: number
  mouseLocs: MouseCoords[]
  lastDelayLoc?: MouseCoords
  timeoutID?: number
}

type menuItemProps = {
  index?: number
  activeRow?: number
  menuActive?: boolean
  contentPropId?: string
  props?: React.HTMLAttributes<HTMLLIElement>
  selectedProps?: React.HTMLAttributes<HTMLLIElement>
  hasData?: boolean
  selected?: boolean
  label: string
  mouseEntered?: () => void
  menuItemAfter?: React.ReactNode
}

type Section = {
  label: string
  key: string | number
  items: React.ReactNode
}

type MouseCoords = {
  x: number
  y: number
}

/**
 * SUB-COMPONENTS
 */

export function MenuItem({
  selected,
  label,
  mouseEntered,
  hasData,
  activeRow,
  menuActive,
  index,
  props,
  contentPropId,
  selectedProps,
  menuItemAfter,
}: menuItemProps) {
  return (
    <li
      onMouseEnter={mouseEntered}
      onFocus={mouseEntered}
      {...props}
      {...{
        "aria-controls": contentPropId + index,
        // tabIndex: activeRow >= 0 ? (selected ? 0 : -1) : 0,
      }}
      {...(selected ? selectedProps : {})}
    >
      {label} {menuItemAfter || null}
    </li>
  )
}

function keyHandler(e) {
  try {
    const { key, shiftKey } = e
    const totalItems = this.props.data.length
    const $el = this.instance.current.querySelector("[aria-selected=true]")
    const inRootMenuContext = $el === document.activeElement
    const navIsOpen = document.querySelector("nav [aria-expanded=true]")
    if (!navIsOpen) return
    const contentPanel = document.querySelector("nav [role=tabpanel]")
    const focusableSelector =
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    // In contentPanel
    if (contentPanel && contentPanel.contains(document.activeElement) && $el) {
      if (
        (shiftKey && key === "Tab") ||
        key === "ArrowLeft" ||
        key === "Escape"
      ) {
        return $el.focus()
      }
      // Find elements of a similar type to active
      // Find all such elements in container
      // Seek to the next element in the index after finding currently selected element
      const focusableElementsInContentPanel = contentPanel.querySelectorAll(
        focusableSelector
      )

      let currentElementIndex = -1
      focusableElementsInContentPanel.forEach((el, index) => {
        if (el === document.activeElement) {
          currentElementIndex = index
        }
      })

      switch (key) {
        case "ArrowUp":
          const previousElement =
            focusableElementsInContentPanel[currentElementIndex - 1]
          return previousElement && previousElement.focus()
        case "ArrowDown":
          const nextElement =
            focusableElementsInContentPanel[currentElementIndex + 1]
          return nextElement && nextElement.focus()
        default:
          break
      }

      return
    }
    // shiftKey + Tab // ArrowLeft // Escape
    if (key === "Tab" && inRootMenuContext) {
      e.preventDefault()
      let nextFocusElement = shiftKey
        ? $el.previousElementSibling
        : $el.nextElementSibling
      if (nextFocusElement) return nextFocusElement.focus()
    }
    if (/Enter|ArrowRight/.test(key) && inRootMenuContext) {
      const contentPanel = this.instance.current.nextElementSibling
      if (contentPanel) {
        const firstFocusableElement = contentPanel.querySelector(
          focusableSelector
        )
        firstFocusableElement.focus()
      }
    }

    if (key === "Escape") {
      return (
        typeof this.props.onExit === "function" &&
        this.props.onExit(this.props.label)
      )
    }
    if (/ArrowUp|ArrowDown/.test(key)) e.preventDefault()
    if (this.state.activeRow > 0 && key === "ArrowUp" && inRootMenuContext) {
      $el.previousElementSibling.focus()
    }
    if (
      this.state.activeRow < totalItems - 1 &&
      key === "ArrowDown" &&
      inRootMenuContext
    ) {
      $el.nextElementSibling.focus()
    }
  } catch (e) {
    // Failed for some reason - could be mouse + keyboard event combination
  }
}

/**
 * MAIN COMPONENT
 */

export class ReactMegaMenu extends React.Component<Props, State> {
  static readonly DELAY = 150

  static defaultProps = {
    tolerance: 100,
    direction: "RIGHT",
    styleConfig: {},
  }

  state: State = { activeRow: -1, mouseLocs: [] }

  instance = React.createRef<HTMLUListElement>()

  componentDidMount() {
    window.addEventListener("keydown", keyHandler.bind(this))
    // Remove event listeners on cleanup
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", keyHandler.bind(this))
  }

  mouseLeave = () => {
    this.dismissTimeout()
    const { onExit } = this.props
    if (onExit) {
      onExit()
    }
    this.setState({ activeRow: -1 })
  }

  mouseEnterRow(row: number) {
    return () => {
      this.dismissTimeout()
      this.possiblyActivate(row)
    }
  }

  possiblyActivate(row: number) {
    const delay = this.getActivationDelay()
    if (delay) {
      const timeoutID = setTimeout(() => {
        this.possiblyActivate(row)
      }, delay)
      this.setState({ timeoutID } as any)
    } else {
      this.activate(row)
    }
  }

  activate(row: number) {
    const { activeRow } = this.state
    if (row === activeRow) {
      return
    }
    this.setState({ activeRow: row })
  }

  genCoords(x: number, y: number): MouseCoords {
    return { x, y }
  }

  recordMouse = (e: React.MouseEvent) => {
    const x = e.pageX,
      y = e.pageY

    this.setState(prevState => {
      const mouseLocs = [...prevState.mouseLocs]
      mouseLocs.push({ x, y })
      if (mouseLocs.length > 8) {
        mouseLocs.shift()
      }
      return { mouseLocs }
    })
  }

  calcSlope(a: MouseCoords, b: MouseCoords) {
    return (b.y - a.y) / (b.x - a.x)
  }

  enterSubMenu = () => {
    this.dismissTimeout()
  }

  dismissTimeout() {
    const { timeoutID } = this.state
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
  }

  /**
   * Relies on state & props.
   *
   * If there is no current active row _OR_
   * If the mouse location was not previously recorded _OR_
   * If the mouse location comes in from outside of the menu _OR_
   * If the mouse hasn't moved since last delay _OR_
   * DEFAULT:
   * @return 0 delay.
   *
   * If the slope is smaller than slope to top corner, or bigger than slope to bottom corner
   * @return DELAY's value
   *
   * @memberof ReactMegaMenu
   */
  getActivationDelay() {
    const { activeRow } = this.state
    const { tolerance } = this.props
    if (activeRow < 0) {
      return 0
    }

    const bounds = this.instance.current!.getBoundingClientRect()

    const upperLeft = this.genCoords(
        bounds.left,
        bounds.top - (tolerance || 0)
      ),
      upperRight = this.genCoords(bounds.left + bounds.width, upperLeft.y),
      lowerLeft = this.genCoords(
        bounds.left,
        bounds.top + bounds.height + (tolerance || 0)
      ),
      lowerRight = this.genCoords(bounds.left + bounds.width, lowerLeft.y)

    const { mouseLocs } = this.state
    const loc = mouseLocs[mouseLocs.length - 1]
    let prevLoc = mouseLocs[0]

    if (!loc) {
      return 0
    }
    if (!prevLoc) {
      prevLoc = loc
    }

    if (
      prevLoc.x < bounds.left ||
      prevLoc.x > lowerRight.x ||
      prevLoc.y < bounds.top ||
      prevLoc.y > lowerRight.y
    ) {
      // If the previous mouse location was outside of the entire
      // menu's bounds, immediately activate.
      return 0
    }

    const { lastDelayLoc } = this.state

    if (lastDelayLoc && loc.x === lastDelayLoc.x && loc.y === lastDelayLoc.y) {
      // If the mouse hasn't moved since the last time we checked
      // for activation status, immediately activate.
      return 0
    }
    let decreasingCorner, increasingCorner
    switch (this.props.direction) {
      case "LEFT":
      default:
        {
          decreasingCorner = lowerRight
          increasingCorner = upperRight
        }
        break
      case "RIGHT":
        {
          decreasingCorner = upperLeft
          increasingCorner = lowerLeft
        }
        break
    }

    const decreasingSlope = this.calcSlope(loc, decreasingCorner),
      increasingSlope = this.calcSlope(loc, increasingCorner),
      prevDecreasingSlope = this.calcSlope(prevLoc, decreasingCorner),
      prevIncreasingSlope = this.calcSlope(prevLoc, increasingCorner)

    if (
      decreasingSlope < prevDecreasingSlope &&
      increasingSlope > prevIncreasingSlope
    ) {
      // Mouse is moving from previous location towards the
      // currently activated submenu. Delay before activating a
      // new menu row, because user may be moving into submenu.
      this.setState({ lastDelayLoc: loc })
      return ReactMegaMenu.DELAY
    }

    this.setState({ lastDelayLoc: undefined })
    return 0
  }

  render() {
    const { activeRow } = this.state
    const { data, styleConfig, direction } = this.props
    const {
      containerProps,
      menuProps,
      contentProps,
      menuItemSelectedProps,
      menuItemProps,
      menuItemAfter,
    } = styleConfig
    return (
      <div
        {...containerProps}
        className={`${(containerProps && containerProps.className) || ""} ${
          styles.flex
        } ${styles[`flex${direction}`]} ${styles.menu}`}
        onMouseLeave={this.mouseLeave}
      >
        <ul
          {...menuProps}
          className={`${(menuProps && menuProps.className) || ""} ${
            styles.menuUl
          }`}
          ref={this.instance}
          onMouseMove={this.recordMouse}
        >
          {data.map(({ label, key, items }, i) => (
            <MenuItem
              selectedProps={menuItemSelectedProps}
              index={i}
              activeRow={activeRow}
              menuActive={!containerProps["aria-hidden"]}
              contentPropId={contentProps.id}
              props={menuItemProps}
              selected={i === activeRow}
              hasData={items !== undefined}
              mouseEntered={this.mouseEnterRow(i)}
              menuItemAfter={menuItemAfter}
              label={label}
              key={key}
            />
          ))}
        </ul>
        {activeRow > -1 && data[activeRow].items && (
          <div
            {...contentProps}
            {...{
              id: contentProps.id + activeRow,
            }}
            onMouseEnter={this.enterSubMenu}
            className={`${(contentProps && contentProps.className) || ""} ${
              styles.contentSubMenu
            }`}
          >
            <div style={{ width: "100%" }}>{data[activeRow].items}</div>
          </div>
        )}
      </div>
    )
  }
}

/**
 * css in js
 */

const styles: any = {
  flex: css({ display: "flex" }),
  flexLEFT: css({ flexDirection: "row-reverse" }),
  flexRIGHT: css({ flexDirection: "row" }),
  menu: css({
    position: "relative",
  }),
  contentSubMenu: css({
    position: `relative`,
  }),
  menuUl: css({
    listStyle: "none",
    paddingLeft: 0,
  }),
}

export default ReactMegaMenu
