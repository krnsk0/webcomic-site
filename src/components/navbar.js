import React from "react"
import styled from "@emotion/styled"
import { Link, navigate } from "gatsby"
import PageLinks from "./pagelinks"
import useArrowKeys from "../hooks/useArrowKeys"

const Navbar = styled.nav`
  /* postion */
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 2;

  /* flex container */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* style */
  background-color: ${props => props.theme.navbarBgColor};
  user-select: none;
`

const MediaQueryContainer = styled.div`
  flex: 1;
  display: none;
  font-size: 2.2em;

  /* display the arrows on top on desktop and landscape iPad */
  @media (min-height: 600px) and (orientation: landscape) {
    display: flex;
    justify-content: center;
  }
`

const TitleLink = styled(Link)`
  color: ${props => props.theme.headerColor};
  text-decoration: none;
  flex: 1;
  &:hover {
    color: ${props => props.theme.hoveredLinkColor};
  }
`

const Title = styled.h1`
  margin: 0.2em;
  font-family: ${props => props.theme.headerFont};
  font-size: 2em;
`

const OtherLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.linkColor};
  font-family: ${props => props.theme.bodyFont};
  margin-right: 0.7em;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    color: ${props => props.theme.hoveredLinkColor};
  }
`

const NavbarSpacer = styled.div`
  height: 2.8em;
`

export default ({ pageInfo }) => {
  useArrowKeys(pageInfo)

  return (
    <React.Fragment>
      <Navbar>
        <TitleLink to="/">
          <Title>AWAKENED</Title>
        </TitleLink>
        <MediaQueryContainer>
          {pageInfo && <PageLinks pageInfo={pageInfo} />}
        </MediaQueryContainer>
        <OtherLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/chapters">Chapters</NavLink>
        </OtherLinks>
      </Navbar>
      <NavbarSpacer />
    </React.Fragment>
  )
}
