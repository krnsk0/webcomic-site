import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"

const PageContainer = styled.div`
  /* position */
  position: relative;
  top: 2em;

  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* style */
  background-color: ${props => props.theme.navbarBgColor};
  padding: 2em 1em 2em 1em;
`

const Title = styled.h2`
  color: ${props => props.theme.headerColor};
  font-family: ${props => props.theme.headerFont};
  font-size: 1.3em;
`

const Content = styled.div`
  text-align: center;
  margin-top: 1em;
  color: ${props => props.theme.linkColor};
  font-family: ${props => props.theme.bodyFont};
  font-size: 1em;
`

export default props => {
  return (
    <Layout title={`Chapters`}>
      <PageContainer>
        <Box>
          <Title>PAGE NOT FOUND</Title>
        </Box>
      </PageContainer>
    </Layout>
  )
}
