import React from "react"
import { graphql } from "gatsby"
import { css } from "styled-components"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { ProjectsList } from "../components/projects"
import { PageHeader } from "../components/common/pageHeader"
import Section from "../components/common/section"

const bg = css`
  background-color: #D9E5D6;
`

const ProjectsPage = ({data}) => (
  <Layout>
    <SEO title="Projects" />
    <div  css={bg}>
    <PageHeader title={`Projects`} />
    <Section>
      <ProjectsList projects={data.allMarkdownRemark.edges} />
    </Section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
        edges {
          node {
            frontmatter {
              title
              description
              path
              tags
              color
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  }
`

export default ProjectsPage
