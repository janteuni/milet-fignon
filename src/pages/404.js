import React from 'react'
import Container from '../components/container'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Container>
    <h1>404 {data.site.siteMetadata.title}</h1>
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
