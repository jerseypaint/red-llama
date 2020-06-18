import React from "react"
import { graphql } from "gatsby"
import { css } from "styled-components"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"
import { ServicesList } from "../components/services"

const bg = css`
  background-color: #D9E5D6;
`

const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Services" />
    <div  css={bg}>
    <PageHeader title={`Full stack development`} />
    <ServicesList services={data.servicesJson.services} />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    servicesJson {
        services {
            title
            description
            subServices
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
    }
  }
`

export default ServicesPage
