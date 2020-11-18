import React from "react"
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll'

import Img from "gatsby-image"
import media from "../../styles/media"


const Section = styled.div`
  padding: 1rem 1rem;
  position: relative;

  ${media.tablet`
    padding: 2rem 0rem;
  `}

  h1 {
    margin-top: .667rem;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
export const PageHeader = props => {
  return (
    <Section>
      <Container>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.6}>
          {props.image && <Img fluid={props.image} />}
          <h1>{props.title}</h1>
          {props.subtitle && <p>{props.subtitle}</p>}
        </ScrollAnimation>
      </Container>
    </Section>
  )
}
