import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const PageContainer = styled.div``

const Text = styled.div`
  color: ${props => props.theme.colors.bodyText};
  font-family: ${props => props.theme.fonts.body};
  text-align: center;
  margin: 1em;
`

const Image = styled(Img)`
  width: 100%;

  /* don't let it get bigger than 1032px */
  /* excludes all mobile but ipad pro landscape */
  max-width: 1032px;
  @media (min-width: 1032px) {
    margin: 5em auto 1em auto;
  }
`

const FooterSpacer = styled.div`
  height: 4em;
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
        <Image fluid={props.data.file.childImageSharp.fluid} alt="" />
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
