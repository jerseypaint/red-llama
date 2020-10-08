import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { css } from "styled-components"

import Section from "../common/section"
import media from "../../styles/media"
import { GridContainer } from "../common/gridContainer"

const Body = styled(Section)`
  padding-top: 0;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
const Article = styled.article`
    margin-top: 2rem;
`

const Meta = styled.div`
  margin-top: 1rem;
`

export const ProjectsBody = props => {
  return (
    <Body>
      <Container>
        {props.tags.map((tag, index, tags) => (
          <span>
            {tag} {index < tags.length - 1 ? `/` : ``}{" "}
          </span>
        ))}
        <Meta>
        <span>visit: <Link to={props.siteLink}>{props.siteLink}</Link></span>
        </Meta>
        <Article dangerouslySetInnerHTML={{ __html: props.html }} />
      </Container>
    </Body>
  )
}
