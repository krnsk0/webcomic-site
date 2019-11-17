import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { Link, navigate } from "gatsby"
import PageLinks from "./pagelinks"

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
  background-color: ${props => props.theme.colors.navbarBg};
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
  color: ${props => props.theme.colors.header};
  text-decoration: none;
  flex: 1;
`

const Title = styled.h1`
  margin: 0.2em;
  font-family: ${props => props.theme.fonts.header};
  font-size: 2em;
`

const OtherLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.link};
  font-family: ${props => props.theme.fonts.body};
  margin-right: 0.8em;
  text-decoration: none;
  font-size: 1.2em;
`

const NavbarSpacer = styled.div`
  height: 2.8em;
`

export default ({ pageInfo }) => {
  // navigate between pages using arrow keys but only on comic pages
  useEffect(() => {
    const handleUserKeyPress = event => {
      const { keyCode } = event

      if (
        keyCode === 39 &&
        pageInfo &&
        pageInfo.currentPage < pageInfo.lastPage
      ) {
        event.preventDefault()
        navigate(`/page/${pageInfo.nextPage}`)
      } else if (keyCode === 37 && pageInfo && pageInfo.currentPage > 1) {
        event.preventDefault()
        navigate(`/page/${pageInfo.previousPage}`)
      }
    }
    window.addEventListener("keydown", handleUserKeyPress)

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [pageInfo])

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
