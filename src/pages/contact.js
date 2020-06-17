import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"
import { ContactForm } from "../components/common/contactForm"

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact Us" />
    <PageHeader title={data.contactJson.title} />
    <ContactForm />
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
