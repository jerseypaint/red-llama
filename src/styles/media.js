import { css } from "@emotion/core"

export const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 512,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media
