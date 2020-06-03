import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"
import { StyledLink } from "../common/styledLink"
import ScrollAnimation from 'react-animate-on-scroll'

const GridContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const Container = styled.div`
  padding: 0 2rem;
`

const Child = styled.div`
  position: relative;
  height: 100vh;
  padding: 0;
  
`

const GalleryWrapper = styled.div`
  position: relative;
  width: 50%;
  .gatsby-image-wrapper {
    max-width: 100%;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  width: 50%;
`

const Content = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

const activeStyles = css`
  background-color: ${props => props.theme.bg2Color};
`


const WorkItem = ({title, description, link, linkText, fluid}) => {
    return (
          <Child
            >
            <GridContainer>
                <GalleryWrapper>
                  <ScrollAnimation animateIn="zoomIn">
                    <Image fluid={fluid} />
                  </ScrollAnimation>
                </GalleryWrapper>
                <ContentWrapper>
                  <ScrollAnimation animateIn="slideInUp">
                    <Content>
                      <h2>{title}</h2>
                      <p>{description}</p>
                      <StyledLink to={link}>{linkText}</StyledLink>
                    </Content>
                    </ScrollAnimation>
                </ContentWrapper>
            </GridContainer>
          </Child>
    )
}

export const Work = (props) => {
    const [active, setActive] = useState(false)

    function handleActive(value) {
        setActive(value)
    }

    return (
        <Container>
          {props.projects.map( project => (
            <WorkItem handleActive={handleActive} fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid} title={project.node.frontmatter.title} description={project.node.frontmatter.description} link={project.node.frontmatter.path} linkText={`view project`} />
          ))}
        </Container>
    )
  }