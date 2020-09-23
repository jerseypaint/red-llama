import React, { useState, useEffect, useRef } from "react"

import styled from "styled-components"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import ProjectsList from "../components/projects/projectsList"
import Hero from "../components/home/hero"


const IndexPage = ({data, theme}) => {

 return (
  <Layout currentPage={`index`}>
  <SEO title="Home" />
      <Hero />
      <ProjectsList projects={data.allMarkdownRemark.edges} />
    </Layout>
)
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 3, filter: {frontmatter: {type: {eq: "project"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid (maxWidth:1400) {
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