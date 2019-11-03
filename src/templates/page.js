import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Image = styled.img`
  width: 100%;
`

export default props => {
  const { body, date, image, page_number, total_count } = props.pageContext
  console.log("props.data", props.data)
  console.log("image", image)

  const pageInfo = {
    currentPage: page_number,
    lastPage: total_count,
    previousPage: Math.max(page_number - 1, 1),
    nextPage: Math.min(page_number + 1, total_count),
  }

  return (
    <Layout title={`Page ${page_number}`} pageInfo={pageInfo}>
      <Img fluid={props.data.file.childImageSharp.fluid} alt="" />
      <div>
        Page number: <span>{page_number}</span> of <span>{total_count}</span>
      </div>
      <div>
        Date: <span>{date}</span>
      </div>
      <div>
        Body: <span>{body}</span>
      </div>
      <div>
        Image: <span>{image}</span>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($image: String) {
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
