import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import recetteStyles from "./recette.module.scss"

export const Recette = ({ data }) => {
  const recette = data.markdownRemark
  const image = data.file.childImageSharp.fluid
  const style = {
    backgroundImage: 'url(' + image.src + ')',
    backgrounRepeat: 'no repeat',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
  }
  return (
    <Container>
      <div className='md-flex'>
        <div style={style} className='flex-1 md-mw50 sm-h400'></div>
        <div className='md-col-4 px3 mt2 mb4'>
          <h1 className='mb4'>{recette.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: recette.html }} />
        </div>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!, $image: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        image
      }
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Recette
