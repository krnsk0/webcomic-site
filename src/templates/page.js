import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const PageContainer = styled.div`
  /* subtract's navbar height */
  height: calc(100vh - 2.8em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /*  switch off flex and make main page scrollable
      when wide enough to not see whole comic at once */
  @media (min-width: 560px) {
    display: inherit;
  }

  /* always scrollable in landscape */
  @media (orientation: landscape) {
    display: inherit;
  }
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

const FooterSpacer = styled.div`
  height: 2.6em;
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
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
