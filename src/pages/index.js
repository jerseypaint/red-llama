import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import Hero from "../components/home/hero"
import Services from "../components/home/services"
import CTA from "../components/common/cta"
import { media, sizes } from "../styles/media"
import ProjectsList from "../components/projects/projectsList"

const IndexPage = ({data, theme}) => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    if (window.innerWidth <= sizes.mobile) {
     setIsMobile(true)
    }
  })

 return (
  <Layout currentPage={`index`}>
    <SEO title="Home" />
    <Hero doing={data.homeJson.hero.doing} what={data.homeJson.hero.what} whom={data.homeJson.hero.whom} />
    <div id={`scrollContainer`} data-scroll-container>
      <ProjectsList projects={data.allMarkdownRemark.edges} />
    </div>
    <CTA />
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  query {
    homeJson {
      hero {
        doing
        what
        whom
      }
      services {
        description
      }
    }
    servicesJson {
      services {
        title
      }
    }
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