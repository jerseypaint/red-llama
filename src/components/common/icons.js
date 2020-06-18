import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEclipseAlt } from "@fortawesome/pro-duotone-svg-icons"
import { faChevronCircleRight, faCheckCircle } from "@fortawesome/pro-regular-svg-icons"

export const ChevronCircleRight = () => (
    <FontAwesomeIcon icon={faChevronCircleRight} />
)

export const Eclipse = () => (
    <FontAwesomeIcon icon={faEclipseAlt} />
)

export const CheckCircleListItem = () => (
    <FontAwesomeIcon icon={faCheckCircle} listItem />
)