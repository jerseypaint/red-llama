import React from "react"
import styled from "styled-components"
import { css } from "styled-components"

import Section from "../common/section"
import media from "../../styles/media"
import { GridContainer } from "../common/gridContainer"

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
const Article = styled.article`
    margin-top: 2rem;
`

export const ProjectsBody = props => {
  return (
    <Section>
      <Container>
        {props.tags.map((tag, index, tags) => (
          <span>
            {tag} {index < tags.length - 1 ? `/` : ``}{" "}
          </span>
        ))}
        <Article dangerouslySetInnerHTML={{ __html: props.html }} />
      </Container>
    </Section>
  )
}
