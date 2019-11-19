import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { FaInstagram } from "react-icons/fa"

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
  background-color: ${props => props.theme.colors.navbarBg};
  padding: 2em 1em 2em 1em;
`

const Title = styled.h2`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.3em;
`

const Content = styled.div`
  text-align: center;
  margin-top: 1em;
  color: ${props => props.theme.colors.link};
  font-family: ${props => props.theme.fonts.body};
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
