import React from "react"
import { graphql } from "gatsby"

import PostListItem from "../components/post-list-item"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .map(edge => <PostListItem key={edge.node.id} post={edge.node} />)
    return (
        <Layout>
            <SEO title="Publications" />
            <h1>Publications</h1>
            {Posts}
        </Layout>
    )
}
export default IndexPage
export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: {contentType: {eq: "publication"}} }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        description
                        contentType
                    }
                }
            }
        }
    }
`
