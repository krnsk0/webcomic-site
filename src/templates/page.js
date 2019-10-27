import React from "react"
import Layout from "../components/layout"

export default props => {
  const { body, date, image, page_number, total_count } = props.pageContext

  const pageInfo = {
    currentPage: page_number,
    lastPage: total_count,
    previousPage: Math.max(page_number - 1, 1),
    nextPage: Math.min(page_number + 1, total_count),
  }

  return (
    <Layout title={`Page ${page_number}`} pageInfo={pageInfo}>
      <img src={image} alt=""></img>
      <div>
        Page number: <span>{page_number}</span> of <span>{total_count}</span>
      </div>
      <div>
        Date: <span>{date}</span>
      </div>
      <div>
        Body: <span>{body}</span>
      </div>
      <div>{JSON.stringify(pageInfo)}</div>
    </Layout>
  )
}
