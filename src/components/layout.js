import React from "react"
import CSSReset from "./cssreset"
import SEO from "../components/seo"

export default ({ children, title }) => (
  <React.Fragment>
    <SEO title={title} />
    <CSSReset />
    {children}
  </React.Fragment>
)
