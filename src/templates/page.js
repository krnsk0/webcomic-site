import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  /* Footer height: 2.3em */
  /* Navbar height: 2.8em */
  height: calc(100vh - 2.3em - 2.8em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  color: ${props => props.theme.colors.bodyText};
  font-family: ${props => props.theme.fonts.body};
  text-align: center;
  margin: 1em;
`

const Image = styled(Img)`
  width: 100%;
`

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
        <Text dangerouslySetInnerHTML={{ __html: props.pageContext.body }} />
      </ImageContainer>
      {/* <FooterSpacer /> */}
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
