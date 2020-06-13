import { useStaticQuery, graphql } from "gatsby"

export const useStaticImage = () => {
  const { images: { edges: nodes } } = useStaticQuery(
      graphql`
          query Query {
              images: allImageSharp(filter: {fluid: {originalName: {glob: "*.jpg"}}}) {
                  edges {
                      node {
                          fluid(
                              quality: 85
                          ) {
                              originalName
                              src
                              ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                  }
              }
          }

      `
  )

  let imagesByKey = {}
  nodes.forEach(n => imagesByKey[n.node.fluid.originalName] = n.node.fluid)
  return imagesByKey
}