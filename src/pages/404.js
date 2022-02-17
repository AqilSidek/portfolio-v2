import * as React from "react"
import { Link } from "gatsby"
import { faSkull } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Uh oh &nbsp; <FontAwesomeIcon icon={faSkull} size='2x' /></h1>
      <p style={paragraphStyles}>
        Whoops it looks like that page doesn't exist.{" "}
        <span role="img" aria-label="Awkward emoji">
          😬
        </span>{" "}
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
