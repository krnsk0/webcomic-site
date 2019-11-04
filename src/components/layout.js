import React from "react"
import CSSReset from "./cssreset"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { ThemeProvider } from "emotion-theming"
const theme = require("../theme")

export default ({ children, title, pageInfo }) => (
  <ThemeProvider theme={theme}>
    <SEO title={title} />
    <CSSReset />
    <Navbar pageInfo={pageInfo} />
    {children}
    <Footer />
  </ThemeProvider>
)
