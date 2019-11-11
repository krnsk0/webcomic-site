import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Footer = styled.nav`
  /* postion and size */
  position: fixed;
  bottom: 0px;
  width: 100%;

  /* flex container */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* style */
  background-color: ${props => props.theme.colors.navbarBg};
`

const PageLinks = styled.div`
  font-size: 2em;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.links};
  font-family: ${props => props.theme.fonts.body};
  margin: 0.3em;
  text-decoration: none;
`

export default ({ pageInfo }) => {
  return (
    <Footer>
      {pageInfo && (
        <PageLinks>
          <NavLink to="/page/1">&lt;&lt;</NavLink>
          <NavLink to={`/page/${pageInfo.previousPage}`}>&lt;</NavLink>
          <NavLink to={`/page/${pageInfo.nextPage}`}>&gt;</NavLink>
          <NavLink to={`/page/${pageInfo.lastPage}`}>&gt;&gt;</NavLink>
        </PageLinks>
      )}
    </Footer>
  )
}
