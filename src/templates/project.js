import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"
import { ProjectsBody } from "../components/projects"

const ProjectTemplate = ({data}) => {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark

    return (
  <Layout>
    <SEO title={frontmatter.title} />
        <PageHeader title={frontmatter.title} image={frontmatter.featuredImage.childImageSharp.fluid} />
        <ProjectsBody html={html} tags={frontmatter.tags} />
  </Layout>
)}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        description
        tags
        featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
      html
    }
  }
`

export default ProjectTemplate
