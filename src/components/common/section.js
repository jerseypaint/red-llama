import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import media from "../../styles/media"

const Section = styled.section`
  padding: 4rem 1rem;
  position: relative;

  ${media.tablet`
    padding: 4rem 0rem;
  `}
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
`

export default props => (
  <Section className={props.className} style={props.style}>
    <Container>{props.children}</Container>
  </Section>
)