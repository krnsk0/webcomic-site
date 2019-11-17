import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const PageLinksWrapper = styled.div``

const ActiveLink = styled(Link)`
  color: ${props => props.theme.colors.link};
  font-family: ${props => props.theme.fonts.body};
  margin: 0.3em;
  text-decoration: none;
`

const InactiveLink = styled.span`
  color: ${props => props.theme.colors.inactiveLink};
  font-family: ${props => props.theme.fonts.body};
  margin: 0.3em;
  text-decoration: none;
`

const NavLink = ({ to, isActive, children }) => {
  if (isActive) {
    return <ActiveLink to={to}>{children}</ActiveLink>
  } else {
    return <InactiveLink>{children}</InactiveLink>
  }
}

export default ({ pageInfo }) => {
  return (
    <PageLinksWrapper>
      <NavLink to="/page/1" isActive={pageInfo.currentPage > 1}>
        &lt;&lt;
      </NavLink>
      <NavLink
        to={`/page/${pageInfo.previousPage}`}
        isActive={pageInfo.currentPage > 1}
      >
        &lt;
      </NavLink>
      <NavLink
        to={`/page/${pageInfo.nextPage}`}
        isActive={pageInfo.currentPage < pageInfo.lastPage}
      >
        &gt;
      </NavLink>
      <NavLink
        to={`/page/${pageInfo.lastPage}`}
        isActive={pageInfo.currentPage < pageInfo.lastPage}
      >
        &gt;&gt;
      </NavLink>
    </PageLinksWrapper>
  )
}
