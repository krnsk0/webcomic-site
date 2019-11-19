import React from "react"
import { navigate } from "gatsby"

const useArrowKeys = pageInfo => {
  // navigate between pages using arrow keys but only on comic pages
  React.useEffect(() => {
    const handleUserKeyPress = event => {
      const { keyCode } = event

      if (
        keyCode === 39 &&
        pageInfo &&
        pageInfo.currentPage < pageInfo.lastPage
      ) {
        event.preventDefault()
        navigate(`/page/${pageInfo.nextPage}`)
      } else if (keyCode === 37 && pageInfo && pageInfo.currentPage > 1) {
        event.preventDefault()
        navigate(`/page/${pageInfo.previousPage}`)
      }
    }
    window.addEventListener("keydown", handleUserKeyPress)

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [pageInfo])
}

export default useArrowKeys
