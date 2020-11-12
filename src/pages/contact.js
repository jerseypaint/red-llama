import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/common/layout"
import SEO from "../components/common/seo"
import { PageHeader } from "../components/common/pageHeader"
import Section from "../components/common/section"

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

  .hidden {
    display: none;
  }

  form {
    div {
      margin: 1rem 0;
      font-size: 1.4rem;
      line-height: 1.7;

      label {
        display: block;
      }

      input, textarea {
        width: 100%;
      }
    }

    button {
        font-size: 1.6rem;
        background-color: transparent;
        text-decoration: none;
        border: none;
        border-bottom: 1px solid ${props => props.theme.textColor};
        color: ${props => props.theme.textColor};
        padding-bottom: 1.5px;

        &:hover {
            border-bottom: none;
            background-image: url(/images/squiggle-go.svg);
            background-position: 0 calc(100% - 1.5px);
            background-size: auto 3px;
            background-repeat: repeat-x;
            padding-bottom: 3px;
        }
    }
  }
`

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />
    <PageHeader title={data.contactJson.title} />
    <Section>
      <Container>
        <form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div>
            <label>Full Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email Address</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label>Subject</label>
            <input type="text" name="subject" />
          </div>
          <div>
            <label>
              Message
            </label>
            <textarea name="message" rows="4"></textarea>
          </div>
          <button type="submit">Send</button>
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
