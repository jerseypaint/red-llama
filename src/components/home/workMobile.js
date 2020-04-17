import React from "react"
import styled from "@emotion/styled"
import ScrollAnimation from 'react-animate-on-scroll';
import Image from "gatsby-image"

import { StyledLink } from "../common/styledLink"

const Container = styled.div`
  color: #fff;
  padding: 0 2rem;
`

const Child = styled.div`
  padding: 3rem 0;

`

const Content = styled.div`
    padding-top: 4rem;
`

const WorkItem = ({title, description, link, linkText, fluid}) => {
    return (
        <Child>
            <ScrollAnimation animateIn="fadeInUp">
                <Image fluid={fluid} />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
                <Content>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <StyledLink to={link}>{linkText}</StyledLink>
                </Content>
            </ScrollAnimation>
        </Child>
    )
}

export const WorkMobile = ({projects}) => {
    return (
        <Container>
          {projects.map( project => (
            <WorkItem fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid} title={project.node.frontmatter.title} description={project.node.frontmatter.description} link={project.node.frontmatter.path} linkText={`view project`} />
          ))}
        </Container>
    )
  }