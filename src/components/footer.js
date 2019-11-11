import React from "react"
import styled from "@emotion/styled"
import PageLinks from "./pagelinks"

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

export default ({ pageInfo }) => {
  return <Footer>{pageInfo && <PageLinks pageInfo={pageInfo} />}</Footer>
}
