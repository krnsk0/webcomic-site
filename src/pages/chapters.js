import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ChapterContainer = styled.div`
  /* position */
  position: relative;
  top: 2em;

  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  margin: 1em;
`

const ChapterLinkContainer = styled.li`
  text-align: center;
`

const ChapterLink = styled(Link)``

export default props => {
  const chapters = props.data.allMarkdownRemark.edges
  return (
    <Layout title={`Chapters`}>
      <ChapterContainer>
        <Title>Chapters</Title>
        <nav>
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
        </nav>
      </ChapterContainer>
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
