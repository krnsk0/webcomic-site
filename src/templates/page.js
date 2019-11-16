import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border: 1px solid green;
`

const Text = styled.div`
  color: ${props => props.theme.colors.bodyText};
  text-align: center;
  margin: 1em;
`

const Image = styled(Img)``

export default props => {
  const { page_number, total_count } = props.pageContext

  const pageInfo = {
    currentPage: page_number,
    lastPage: total_count,
    previousPage: Math.max(page_number - 1, 1),
    nextPage: Math.min(page_number + 1, total_count),
  }

  return (
    <Layout title={`Page ${page_number}`} pageInfo={pageInfo}>
      <ImageContainer>
        <Image fluid={props.data.file.childImageSharp.fluid} alt="" />
        {/* <div style={{ height: "100px", border: "1px red solid" }}>test</div> */}
        <Text>testing</Text>
      </ImageContainer>
    </Layout>
  )
}

export const query = graphql`
  query($image: String) {
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
