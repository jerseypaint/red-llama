import React, { useState, useEffect, useRef } from "react"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { Work } from "../components/home/work"
import { WorkMobile } from "../components/home/workMobile"
import Hero from "../components/home/hero"
import Services from "../components/home/services"
import CTA from "../components/common/cta"
import media, { sizes } from "../styles/media"

const IndexPage = ({data}) => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    if (window.innerWidth <= sizes.mobile) {
     setIsMobile(true)
    }
  })

 return (
  <Layout>
    <SEO title="Home" />
    <Hero doing={data.homeJson.hero.doing} what={data.homeJson.hero.what} whom={data.homeJson.hero.whom} />
    <Services description={data.homeJson.services.description} services={data.servicesJson.services} />
    {isMobile
      ? <WorkMobile projects={data.allMarkdownRemark.edges} />
      : <Work projects={data.allMarkdownRemark.edges} />
    }
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