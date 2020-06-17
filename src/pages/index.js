import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { Projects } from "../components/home/projects"
import Hero from "../components/home/hero"
import Services from "../components/home/services"
import CTA from "../components/common/cta"
import { media, sizes } from "../styles/media"

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
      <Services description={data.homeJson.services.description} services={data.servicesJson.services} />
      <Projects theme={theme} projects={data.allMarkdownRemark.edges} />
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
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 4, filter: {frontmatter: {type: {eq: "project"}}}) {
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
            color
          }
        }
      }
    }
  }  
`