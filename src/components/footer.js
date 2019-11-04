import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const Footer = styled.nav`
  /* postion */
  position: static;
  bottom: 0px;

  /* flex container */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* style */
  background-color: ${props => props.theme.colors.navbarBg};
`

const Copyright = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fonts.body};
  margin: 1em;
`

export default ({ pageInfo }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <Footer>
      <Copyright>© 2019 {site.siteMetadata.author}</Copyright>
    </Footer>
  )
}
