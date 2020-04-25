import styled from "styled-components"

import media from "../../styles/media"

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  ${media.tablet`
    grid-gap: 28px;
    grid-template-columns: repeat(12, 1fr);
  `}
`
