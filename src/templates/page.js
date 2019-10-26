import React from "react"
import Layout from "../components/layout"

export default props => {
  const { body, date, image, page_number } = props.pageContext

  return (
    <Layout title={`Page ${page_number}`}>
      <div>
        Page number: <span>{page_number}</span>
      </div>
      <div>
        Date: <span>{date}</span>
      </div>
      <div>
        Body: <span>{body}</span>
      </div>
      <img src={image} alt=""></img>
    </Layout>
  )
}
