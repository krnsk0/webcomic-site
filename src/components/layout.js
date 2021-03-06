import React from "react"
import { ThemeProvider } from "emotion-theming"
import { css, Global } from "@emotion/core"
import CSSReset from "./cssreset"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const theme = require("../../data/config/theme.json")

const globalStyles = css`
  html {
    font-size: 3.5vw;

    /* smaller font on landscape */
    @media (orientation: landscape) {
      font-size: 2.2vw;
    }

    /* fixed font on desktop and landscape iPad */
    @media (min-height: 600px) and (orientation: landscape) {
      font-size: 20px;
    }

    background-color: ${theme.pageBgColor};
  }
`

export default ({ children, title, pageInfo }) => {
  // pageInfo is only defined when viewing a comic page
  // on other pages it's false
  return (
    <ThemeProvider theme={theme}>
      <SEO title={title} />
      <CSSReset />
      <Global styles={globalStyles} />
      <Navbar pageInfo={pageInfo} />
      {children}
      <Footer pageInfo={pageInfo} />
    </ThemeProvider>
  )
}
