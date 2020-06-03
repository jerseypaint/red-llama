import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"
import { ServicesList } from "../components/services"

const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Services" />
    <PageHeader title={`Full stack development`} />
    <ServicesList services={data.servicesJson.services} />
  </Layout>
)

export const query = graphql`
  query {
    servicesJson {
        services {
            title
            description
            subservices
        }
    }
  }
`

export default ServicesPage
