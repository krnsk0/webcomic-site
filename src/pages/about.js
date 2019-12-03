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
  background-color: ${props => props.theme.colors.navbarBg};
  padding: 2em 1em 2em 1em;
`

const Text = styled.div`
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.header};
    font-family: ${props => props.theme.fonts.header};
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
    color: ${props => props.theme.colors.link};
    font-family: ${props => props.theme.fonts.body};
    font-size: 1em;
  }

  a {
    color: ${props => props.theme.colors.link};
    font-family: ${props => props.theme.fonts.body};
    &:hover {
      color: ${props => props.theme.colors.hoveredLink};
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
