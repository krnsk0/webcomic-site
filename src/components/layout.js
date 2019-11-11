import React from "react"
import { ThemeProvider } from "emotion-theming"
import { css, Global } from "@emotion/core"

import CSSReset from "./cssreset"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const theme = require("../theme")

const fontSizeStyle = css`
  html {
    font-size: 4vw;
  }
`

export default ({ children, title, pageInfo }) => {
  // pageInfo is only defined when viewing a comic page
  // on other pages it's false
  return (
    <ThemeProvider theme={theme}>
      <SEO title={title} />
      <CSSReset />
      <Global styles={fontSizeStyle} />
      <Navbar pageInfo={pageInfo} />
      {children}
      <Footer pageInfo={pageInfo} />
    </ThemeProvider>
  )
}
