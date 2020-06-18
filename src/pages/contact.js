import React from "react"
import { graphql } from "gatsby"
import { css } from "styled-components"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"
import { ContactForm } from "../components/common/contactForm"
import Section from "../components/common/section"
import ScrollAnimation from 'react-animate-on-scroll'

const bg = css`
  background-color: #F7A072;
`

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact Us" />
    <div  css={bg}>
    <PageHeader title={data.contactJson.title} />
    <Section>
      <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
        <ContactForm />
      </ScrollAnimation>
    </Section>
    </div>
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