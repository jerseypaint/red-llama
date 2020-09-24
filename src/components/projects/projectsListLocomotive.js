import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import media from "../../styles/media"
import LocomotiveScroll from 'locomotive-scroll'

const ProjectContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
const SingleProject = styled.div`
    display: flex;
    margin: 300px 0;
`

const Info = styled.div`
    z-index: 4;
    background: #eee;
    padding: 2rem;

    p {
        margin-top: 1rem;
    }

    ${media.tablet`
        max-width: 500px;
    `}
`

const Title = styled.div`
    h3 {
        font-size: 5rem;
    }
`

const FeaturedImage = styled.div`
    flex: 1 1;
    margin-left: -1rem;

    a {
        display: block;
        opacity: 0.8;
        transform: scale(1 , 1);
        transition: opacity 800ms ease-in-out, transform 600ms ease-in-out;

        &:hover {
            transform: scale(1.13, 1.13);
            opacity: 1;
        }
    }
`

const Meta = styled.div`
    max-width: 480px;
`

const Projects = (props) => {
    const scrollRef = useRef(null)
    const scroll = {
        // Locomotive Scroll
        // https://github.com/locomotivemtl/locomotive-scroll#instance-options
        container: "#___gatsby",
        options: {
          smooth: true,
          smoothMobile: false,
          getDirection: true,
          touchMultiplier: 2.5,
          lerp: 0.15,
        },
      }

    useEffect(() => {
        let locomotiveScroll
        locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector(scroll.container),
            ...scroll.options,
        })
        locomotiveScroll.update()
    
        // Exposing to the global scope for ease of use.
        window.scroll = locomotiveScroll
    
        locomotiveScroll.on("scroll", func => {
            // Update `data-direction` with scroll direction.
            document.documentElement.setAttribute("data-direction", func.direction)
        })
    
        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy()
        }
        })

    return (
        <div>
        <ProjectContainer data-scroll-section>
            {props.projects.map(project => (
                <SingleProject>
                    <Info data-scroll={``} data-scroll-speed="-2">
                        <Title>
                            <h3>{project.node.frontmatter.title}</h3>
                        </Title>
                        <Meta>
                        {project.node.frontmatter.tags.map((tag, index, tags) => (
                            <span>{tag} {index < tags.length - 1 ? `/` : ``} </span>
                        ))}
                        <p>{project.node.frontmatter.description}</p>
                        </Meta>
                    </Info>

                    <FeaturedImage data-scroll={``} data-scroll-speed="4" data-scroll-position="top">
                        <Link to={project.node.frontmatter.path}><Image fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid} /></Link>
                    </FeaturedImage>
                </SingleProject>
            ))}
        </ProjectContainer>
        </div>
    )
}

export default Projects