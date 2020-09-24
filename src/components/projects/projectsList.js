import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import media from "../../styles/media"

const ProjectContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
const SingleProject = styled.div`
    margin: 100px 0;
`

const Info = styled.div`
    z-index: 1;

    p {
        margin-top: 1rem;
    }

    ${media.tablet`
        display: flex;
        align-items: flex-end;
    `}
`

const Title = styled.div`
    margin: 0 2rem 0 0;
    z-index: 2;

    h3 {
        font-size: 6.875rem;
        margin: 0;
    }
`

const FeaturedImage = styled.div`
    flex: 1 1;
    padding: 0;
    a {
        display: block;
        position: relative;
        margin: 0;

        &:hover {
            
        }
    }
`

const Meta = styled.div`

`

const Projects = (props) => {
<<<<<<< HEAD

    const scroll = {
        // Locomotive Scroll
        // https://github.com/locomotivemtl/locomotive-scroll#instance-options
        container: "#scrollContainer",
        options: {
          smooth: true,
          smoothMobile: false,
          getDirection: true,
          touchMultiplier: 2.5,
          lerp: 0.15,
        },
      }

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector(scroll.container),
            ...scroll.options,
        })
        locomotiveScroll.update()
    },[])

    return (
=======
        return (
>>>>>>> 710d400c79ba673162e2a73c8febc5b00d174c6f
        <div>
        <ProjectContainer >
            {props.projects.map(project => (
<<<<<<< HEAD
                <SingleProject data-scroll-section>
                    <Info data-scroll={``} data-scroll-speed="-2" data-scroll-position="top">
=======
                <SingleProject>
                    <Info>
>>>>>>> 710d400c79ba673162e2a73c8febc5b00d174c6f
                        <Title>
                            <h3><span>{project.node.frontmatter.title}</span></h3>
                        </Title>
                        <Meta>
                        {project.node.frontmatter.tags.map((tag, index, tags) => (
                            <span>{tag} {index < tags.length - 1 ? `/` : ``} </span>
                        ))}
                        <p>{project.node.frontmatter.description}</p>
                        </Meta>
                    </Info>
<<<<<<< HEAD
                    <FeaturedImage data-scroll={``} data-scroll-speed="4">
                        <Link to={project.node.frontmatter.path}><Image fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid} /></Link>
=======

                    <FeaturedImage>
                        <Link to={project.node.frontmatter.path}><Image fluid={{...project.node.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 16 / 9}} /></Link>
>>>>>>> 710d400c79ba673162e2a73c8febc5b00d174c6f
                    </FeaturedImage>
                </SingleProject>
            ))}
        </ProjectContainer>
        </div>
    )
}

export default Projects