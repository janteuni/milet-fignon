import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"

const Index = ({ data }) => (
  <Container>
    <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Milet Fignon home page"
      />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.frontmatter.title}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <Link to={node.fields.slug}>go</Link>
          </div>
        ))}

  </Container>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    file(relativePath: { eq: "images/home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
