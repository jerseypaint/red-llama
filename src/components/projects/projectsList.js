import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Image from "gatsby-image"

import LocomotiveScroll from 'locomotive-scroll'

const ProjectContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
const SingleProject = styled.div`
    display: flex;
    margin: 300px 0;

    .gatsby-image-wrapper {
        min-width: 500px;
    }
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
        <ProjectContainer>
            {props.projects.map(project => (
                <SingleProject data-scroll-section>
                    <div data-scroll data-scroll-speed="-2">
                        <h3>{project.node.frontmatter.title}</h3>
                        <p>{project.node.frontmatter.description}</p>
                    </div>
                    <div data-scroll data-scroll-speed="4" data-scroll-position="top">
                        <Image fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid} />
                    </div>
                </SingleProject>
            ))}
        </ProjectContainer>
        </div>
    )
}

export default Projects