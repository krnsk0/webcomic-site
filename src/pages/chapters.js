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
  background-color: ${props => props.theme.colors.navbarBg};
`

const Title = styled.h2`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fonts.header};
  margin-top: 1em;
`

const ChapterLinkContainer = styled.li`
  text-align: center;
  margin: 1em;
`

const ChapterLink = styled(Link)`
  color: ${props => props.theme.colors.link};
  font-family: ${props => props.theme.fonts.body};
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
