import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Container from "../components/container"

export const Template = ({ data }) => {
  const recette = data.markdownRemark
  const image = data.file
  return (
    <Container>
      <Img
        fluid={image.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
      <h1>{recette.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: recette.html }} />
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  file(relativePath: {eq: "images/saumon.jpg"}) {
    id
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`
export default Template
