import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Container from "../components/container"

const Index = ({ data }) => (
    <Container>
      <Link to="/about">About</Link>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
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
  }
`

export default Index
