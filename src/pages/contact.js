import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact Us" />
    <PageHeader title={data.contactJson.title} />
  </Layout>
)

export const query = graphql`
  query {
    contactJson {
        title
        description
    }
  }
`

export default ContactPage
