import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ScrollAnimation from 'react-animate-on-scroll'
import media from "../../styles/media"

const ProjectContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
const SingleProject = styled.div`
    margin: 100px 0;

    ${media.desktop`
    
    `}
`

const Info = styled.div`
    z-index: 1;
    padding: 0 1rem;

    p {
        margin-top: 1rem;
    }

    ${media.desktop`
        display: flex;
        align-items: flex-end;
        padding: 0;
    `}
`

const Title = styled.div`
    margin: 0 2rem 0 0;
    z-index: 2;

    h3 {
        font-size: 3.875rem;
        margin: 0;
    }
    ${media.desktop`
        max-width: 60%;
        h3 {
            font-size: 6.875rem;
            margin: 0;
        }
    `}
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

const ImageLink = styled(Link)`
    border: none;
    padding: 0;
    
    &:hover {
        background-image: none;
        padding: 0;
    }
`

const MobileLinkContainer = styled.div`
    text-align: center;
    margin-top: 1rem;

    ${media.desktop`
        display: none;
      `}
`

const ProjectsList = (props) => {
        return (
        <div>
        <ProjectContainer >
            {props.projects.map(project => (
               <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <SingleProject>
                    <Info>
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
                    <FeaturedImage>
                        <ImageLink to={project.node.frontmatter.path}><Image fluid={{...project.node.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 16 / 9}} /></ImageLink>
                    </FeaturedImage>
                        <MobileLinkContainer>
                            <Link to={project.node.frontmatter.path}>View {project.node.frontmatter.title}</Link>
                        </MobileLinkContainer>
                </SingleProject>
                </ScrollAnimation>
            ))}
        </ProjectContainer>
        </div>
    )
}

export default ProjectsList