import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Layout from "../components/layout"

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

const ChapterBox = styled.nav`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* style */
  background-color: ${props => props.theme.navbarBgColor};
`

const Title = styled.h2`
  color: ${props => props.theme.headerColor};
  font-family: ${props => props.theme.headerFont};
  margin-top: 1em;
`

const ChapterLinkContainer = styled.li`
  text-align: center;
  margin: 1em;
`

const ChapterLink = styled(Link)`
  color: ${props => props.theme.linkColor};
  font-family: ${props => props.theme.bodyFont};
  &:hover {
    color: ${props => props.theme.hoveredLinkColor};
  }
`

export default props => {
  const chapters = props.data.allMarkdownRemark.edges
  return (
    <Layout title={`Chapters`}>
      <PageContainer>
        <ChapterBox>
          <Title>CHAPTERS</Title>
          <ul>
            {chapters.map(chapter => {
              const { number, title, page_number } = chapter.node.frontmatter
              return (
                <ChapterLinkContainer key={number}>
                  <ChapterLink to={`/page/${page_number}`}>
                    Chapter {number}: {title}
                  </ChapterLink>
                </ChapterLinkContainer>
              )
            })}
          </ul>
        </ChapterBox>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*/data/chapters/.*/" } }
      sort: { fields: frontmatter___number }
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
