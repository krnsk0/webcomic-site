import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Navbar = styled.nav`
  /* postion */
  position: sticky;
  top: 0px;

  /* flex container */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* style */
  background-color: grey;
`

const Title = styled.h1`
  margin: 1em;
`

const PageLinks = styled.div``

const OtherLinks = styled.div``

const NavLink = styled(Link)`
  margin: 1em;
`

export default ({ pageInfo }) => {
  return (
    <Navbar>
      <Title>Awakened</Title>
      {pageInfo && (
        <PageLinks>
          <NavLink to="/page/1">First</NavLink>
          <NavLink to={`/page/${pageInfo.previousPage}`}>Prev</NavLink>
          <NavLink to={`/page/${pageInfo.nextPage}`}>Next</NavLink>
          <NavLink to={`/page/${pageInfo.lastPage}`}>Last</NavLink>
        </PageLinks>
      )}
      <OtherLinks>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/chapters">Chapters</NavLink>
      </OtherLinks>
    </Navbar>
  )
}
