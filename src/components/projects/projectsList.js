import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { flatten } from "lodash"


import Section from "../common/section"
import { GridContainer } from "../common/gridContainer"
import media from "../../styles/media"
import theme from "../../styles/theme"
import { StyledLink } from "../common/styledLink"

const TagWrapper = styled.ul`
    position: relative;
    list-style: none;
    text-transform: uppercase;
    ${media.tablet`
        padding-right: 2rem;
    `}
`

const Content = styled.div`
    grid-column: span 4;
    grid-row: span 2;
    align-self: end;
    display: flex;

    ${media.tablet`
        grid-column: 7 / span 5 ;
    `}
`
const ImageWrapper = styled.div`
      grid-column: 1 / span 4 ;
      grid-row: span 1;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        margin-bottom: 0;
      }

      ${media.tablet`
        grid-column: 1 / span 5 ;
    `}
`

const ProjectsWrapper = styled.div`

`

const ProjectItemWrapper = styled.div`
    height: calc(100vh - 100px);
`

const sticky = css`
    position: sticky;
    top: 100px;
    height: calc(100vh - 100px);
    padding: 3em 2em;
    background:linear-gradient(160deg, ${theme.brand}, ${theme.brand} 30%, transparent 10%, transparent);
`

const ProjectItem = ({ updateProject, description, title, link, image, tags, color}) => {
    const [inView, setInView] = useState(false)
    const ref = useRef()

    useEffect(() => {
      let prevRatio = 0.0
      const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.intersectionRatio > prevRatio){
            setInView(true)
            updateProject(
                {
                    title: title,
                    description: description,
                    link: link,
                    image: image,
                    tags: tags,
                    color: color
                 }         
            )
        } else {
            setInView(false)
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
        <ProjectItemWrapper  ref={ref} title={title} description={description} link={link} tags={tags} />
    )
}


export const ProjectsList = ({projects}) => {
    const initialProject = projects[0].node.frontmatter

    const [currentProject, setCurrentProject] = useState({
        title: initialProject.title,
        description: initialProject.description,
        link: initialProject.link,
        image: initialProject.featuredImage.childImageSharp.fluid.src,
        tags: initialProject.tags,
        color: theme.brand
    })

    function updateProject(value) {
        setCurrentProject(value)
    }

    return (
        <Section>
            <ProjectsWrapper currentProject={currentProject} projects={projects}>
                <GridContainer css={css`
                    ${sticky};
                    background:linear-gradient(160deg, ${currentProject.color}, ${currentProject.color} 30%, transparent 10%, transparent);
                    `}>
                    <ImageWrapper>
                        <img src={currentProject.image} />
                    </ImageWrapper>
                    <Content>
                        <TagWrapper>
                                {currentProject.tags.map(tag => (
                                    <li>{tag}</li>
                                ))}
                        </TagWrapper>
                        <div>
                            <h2>{currentProject.title}</h2 >
                            <p>{currentProject.description}</p>
                            <StyledLink to={currentProject.link}>Learn More</StyledLink>
                        </div>
                    </Content>
                </GridContainer>
                {projects.map(project => (        
                        <ProjectItem
                            title={project.node.frontmatter.title}
                            description={project.node.frontmatter.description}
                            link={project.node.frontmatter.path}
                            image={project.node.frontmatter.featuredImage.childImageSharp.fluid.src}
                            tags={project.node.frontmatter.tags}
                            color={project.node.frontmatter.color}
                            updateProject={updateProject} />
                    ))}
            </ProjectsWrapper>
        </Section>
    )
}
