import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import media from "../../styles/media"
import { StyledLink } from "../common/styledLink"


const GridContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const Container = styled.div`
  transition: all 600ms linear;
  color: #fff;
  padding: 0 2rem;
`

const Child = styled.div`
  transition: all 600ms linear;
  position: relative;
  height: 100vh;
  padding: 0;
  
`

const GalleryWrapper = styled.div`
  position: relative;
  width: 50%;

  .gatsby-image-wrapper {
    max-width: 500px;
    margin: 30%;
    transition: all 600ms ease-in-out;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  width: 50%;
`

const Content = styled.div`
  max-width: 500px;
  margin: 0 auto;

  p {
    height:0;
    overflow: hidden;
    transition: all 600ms ease-in-out;
  }
`

const inViewStyles = css`
 .gatsby-image-wrapper {
    max-width: 100%;
    margin: 0;
  }

  p {
    height: 15rem;
  }
`

const activeStyles = css`
  background-color: #121212;
`


const WorkItem = ({active = false, handleActive, image, title, description, link, linkText, fluid}) => {
    const [inView, setInView] = useState(false)
    const ref = useRef()
    let prevRatio = 0.0

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio > prevRatio){
            setInView(true)
            handleActive(true)
           // ref.current.scrollIntoView({blcok: "start", behavior: 'smooth'})
        } else {
            setInView(false)
            handleActive(false)
        }
        prevRatio = entry.intersectionRatio
    },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.4
        }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
    }, [ref]);

    return (
          <Child
            ref={ref}
            inView={inView}
            css={inView ? inViewStyles : undefined }
          >
            <GridContainer>
                <GalleryWrapper>
                  <Image fluid={fluid} />
                </GalleryWrapper>
                <ContentWrapper>
                  <Content>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <StyledLink to={link}>{linkText}</StyledLink>
                  </Content>
                </ContentWrapper>
            </GridContainer>
          </Child>
    )
}

export const Work = ({projects}) => {
    const [active, setActive] = useState(false)

    function handleActive(value) {
        setActive(value)
    }
    return (
        <Container active={active} css={active ? activeStyles : undefined}>
          {projects.map( project => (
            <WorkItem active={active} handleActive={handleActive} fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid} title={project.node.frontmatter.title} description={project.node.frontmatter.description} link={project.node.frontmatter.path} linkText={`view project`} />
          ))}
        </Container>
    )
  }