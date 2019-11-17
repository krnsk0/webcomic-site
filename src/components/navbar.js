import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { Link, navigate } from "gatsby"

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
  color: ${props => props.theme.colors.link};
  font-family: ${props => props.theme.fonts.body};
  margin-right: 0.8em;
  text-decoration: none;
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
        <OtherLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/chapters">Chapters</NavLink>
        </OtherLinks>
      </Navbar>
      <NavbarSpacer />
    </React.Fragment>
  )
}
