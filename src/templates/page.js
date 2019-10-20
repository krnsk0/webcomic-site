import React from "react"

export default props => {
  const { body, date, image, page_number } = props.pageContext

  return (
    <div>
      <div>
        Page number: <span>{page_number}</span>
      </div>
      <div>
        Date: <span>{date}</span>
      </div>
      <div>
        Body: <span>{body}</span>
      </div>
      <img
        src={image}
        alt=""
        style={{ maxWidth: "100%", height: "auto" }}
      ></img>
    </div>
  )
}
