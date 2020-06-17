import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { ProjectsList } from "../components/projects"
import { PageHeader } from "../components/common/pageHeader"
import Section from "../components/common/section"

const ProjectsPage = ({data}) => (
  <Layout>
    <SEO title="Projects" />
    <PageHeader title={`Projects`} />
    <Section>
      <ProjectsList projects={data.allMarkdownRemark.edges} />
    </Section>
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
