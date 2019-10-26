import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default props => {
  const chapters = props.data.allMarkdownRemark.edges
  return (
    <Layout title={`Chapters`}>
      <div>
        <b>Chapters</b>
      </div>
      <div>
        {chapters.map(chapter => {
          const { number, title, page_number } = chapter.node.frontmatter
          console.log("number: ", number)
          return (
            <div key={number}>
              <Link to={`/page/${page_number}`}>
                Chapter {number}: {title}
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*/data/chapters/.*/" } }
    ) {
      edges {
        node {
          frontmatter {
            page_number
            number
            title
          }
        }
      }
    }
  }
`
