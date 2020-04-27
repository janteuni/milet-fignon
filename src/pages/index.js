import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"

const Index = ({ data }) => (
  <Container>
    <div className="md-col-4 mx-auto">
      <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Milet Fignon home page"
      />
    </div>
    <div className='md-col-4 mx-auto mt3 mb3'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.frontmatter.title} to={node.fields.slug} className='block receipeList'>
            <h2>{node.frontmatter.title}</h2><p>{node.frontmatter.desc}</p>
          </Link>
        ))}
    </div>
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
            desc
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
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
