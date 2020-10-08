import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"
import Section from "../components/common/section"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact Us" />
    <PageHeader title={data.contactJson.title} />
    <Section>
      <Container>
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p>
          <label>Full Name</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label>Email Address</label>
          <input type="text" name="email" />
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </Container>
    </Section>
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
