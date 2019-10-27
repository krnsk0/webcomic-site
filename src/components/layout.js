import React from "react"
import CSSReset from "./cssreset"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

export default ({ children, title, pageInfo }) => (
  <React.Fragment>
    <SEO title={title} />
    <CSSReset />
    <Navbar pageInfo={pageInfo} />
    {children}
  </React.Fragment>
)
