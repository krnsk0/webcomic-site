import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default props => {
  const chapters = props.data.allChaptersJson.edges
  return (
    <div>
      <SEO title={`Chapters`} />
      <div>
        <b>Chapters</b>
      </div>
      <div>
        {chapters.map(chapter => {
          const { number, title, page_number } = chapter.node
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
    </div>
  )
}

// export const query = graphql`
//   query {
//     allChaptersJson {
//       edges {
//         node {
//           number
//           page_number
//           title
//         }
//       }
//     }
//   }
// `
