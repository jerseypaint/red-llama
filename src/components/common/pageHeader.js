import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import Img from "gatsby-image"
import Section from "../common/section"
import media from "../../styles/media"

const Container = styled.div`
  padding-top: 80px;
  margin: 0 auto;
  max-width: 800px;
`
export const PageHeader = props => {
  return (
    <Section>
      <Container>
        {props.image && <Img fluid={props.image} />}
        <h1>{props.title}</h1>
        {props.subtitle && <p>{props.subtitle}</p>}
      </Container>
    </Section>
  )
}
