import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const PageContainer = styled.div`
  /* position */
  position: relative;
  top: 2em;

  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AboutBox = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* style */
  background-color: ${props => props.theme.navbarBgColor};
  padding: 2em 1em 2em 1em;
`

const Text = styled.div`
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.headerColor};
    font-family: ${props => props.theme.headerFont};
    font-size: 1.3em;
    text-align: center;
  }

  h1:nth-child(n + 2) {
    margin-top: 2em;
  }

  & p,
  span,
  div {
    text-align: center;
    margin-top: 1em;
    color: ${props => props.theme.linkColor};
    font-family: ${props => props.theme.bodyFont};
    font-size: 1em;
  }

  a {
    color: ${props => props.theme.linkColor};
    font-family: ${props => props.theme.bodyFont};
    &:hover {
      color: ${props => props.theme.hoveredLinkColor};
    }
  }
`

export default props => {
  return (
    <Layout title={`Chapters`}>
      <PageContainer>
        <AboutBox>
          <Text
            dangerouslySetInnerHTML={{
              __html: props.data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </AboutBox>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*/data/config/about.md/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
