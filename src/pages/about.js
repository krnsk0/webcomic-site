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

const AboutBox = styled.div`
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

const OffsiteLink = styled.a`
  color: ${props => props.theme.colors.link};
  font-family: ${props => props.theme.fonts.body};
  &:hover {
    color: ${props => props.theme.colors.hoveredLink};
  }
`

const InstagramIcon = styled(FaInstagram)`
  position: relative;
  top: 4px;
  margin-right: 0.2em;
`

const Spacer = styled.div`
  height: 3em;
`

export default props => {
  return (
    <Layout title={`Chapters`}>
      <PageContainer>
        <AboutBox>
          <Title>AUTHOR</Title>
          <Content>A webcomic by HUE</Content>
          <Content>
            <OffsiteLink href="https://www.instagram.com/hueartdump/">
              <InstagramIcon />
              Instagram
            </OffsiteLink>
            <Content>© HUE 2019</Content>
          </Content>

          <Spacer />
          <Title>SITE DESIGN</Title>
          <Content>
            Built using{" "}
            <OffsiteLink href="https://www.gatsbyjs.org/">GatsbyJS</OffsiteLink>{" "}
            by <OffsiteLink href="https://www.krnsk0.dev/">KRNSK0</OffsiteLink>.
          </Content>
        </AboutBox>
      </PageContainer>
    </Layout>
  )
}
