import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const PageContainer = styled.div``

const Text = styled.div`
  color: ${props => props.theme.bodyTextColor};
  font-family: ${props => props.theme.bodyFont};
  text-align: center;
  margin: 1em;
  font-size: 1.3em;
`

const Image = styled(Img)`
  width: 100%;

  /* don't let it get bigger than 840px */
  /* excludes all mobile but ipad pro landscape */
  max-width: 840px;
  @media (min-width: 840px) {
    margin: 5em auto 1em auto;
  }
`

const FooterSpacer = styled.div`
  height: 4em;
`

const Box = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* style */
  padding: 2em 1em 2em 1em;
`

const Title = styled.h2`
  color: ${props => props.theme.headerColor};
  font-family: ${props => props.theme.headerFont};
  font-size: 1.3em;
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
      <PageContainer>
        {props.data.file ? (
          <Image fluid={props.data.file.childImageSharp.fluid} alt="" />
        ) : (
          <Box>
            <Title>Not found: ${props.pageContext.image}</Title>
          </Box>
        )}
        <Text dangerouslySetInnerHTML={{ __html: props.pageContext.body }} />
        <FooterSpacer />
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query($image: String) {
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1032) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
