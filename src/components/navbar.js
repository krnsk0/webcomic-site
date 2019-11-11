import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Navbar = styled.nav`
  /* postion */
  position: sticky;
  top: 0px;
  z-index: 2;

  /* flex container */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* style */
  background-color: ${props => props.theme.colors.navbarBg};
`

const TitleLink = styled(Link)`
  color: ${props => props.theme.colors.header};
  text-decoration: none;
`

const Title = styled.h1`
  margin: 0.2em;
  font-family: ${props => props.theme.fonts.header};
  font-size: 2em;
`

const OtherLinks = styled.div``

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.links};
  font-family: ${props => props.theme.fonts.body};
  margin: 0.3em;
  text-decoration: none;
`

export default ({ pageInfo }) => {
  return (
    <Navbar>
      <TitleLink to="/">
        <Title>AWAKENED</Title>
      </TitleLink>
      <OtherLinks>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/chapters">Chapters</NavLink>
      </OtherLinks>
    </Navbar>
  )
}
