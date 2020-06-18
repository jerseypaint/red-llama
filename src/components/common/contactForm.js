import React from "react"
import styled from "styled-components"
import { css } from "styled-components"

import Section from "../common/section"
import media from "../../styles/media"
import { StyledButton } from "./buttons"

const Form = styled.form`
    background-color: #FFFAE3;
    border: 6px solid black;
    padding: 3rem 2rem;
    display: flex;
    flex-wrap: wrap;

    p {
      width: 100%;
      padding: 0 1rem;

      ${media.tablet`
        width: 50%;
        

        &:last-of-type {
            width: 100%;
        }
    `}
    }

    input, select, textarea {
        display: block;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid black;
        padding: 15px;
        width: 100%;

        option {
        }
    }

    button {
        margin: 0 1rem;
    }
`

export const ContactForm = props => {
    return (
        <Form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" >
      <p>
        <input type="text" name="name" placeholder="Name" />   
      </p>
      <p>
        <input type="email" name="email" placeholder="Email" />
      </p>
      <p>
        <input type="text" name="company" placeholder="Company" />   
      </p>
      <p>
        <select name="role">
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
      </p>
      <p>
        <textarea name="message" rows="1" placeholder="Tell us about your Project"></textarea>
      </p>
      <div data-netlify-recaptcha="true"></div>
        <StyledButton type="submit">Send</StyledButton>
  </Form>
    )
}
