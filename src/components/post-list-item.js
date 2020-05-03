import React from "react"
import { Link } from "gatsby"

const PostListItem = ({ post }) => (
    <div style={{
        marginBottom: `3rem`
    }}>
        <Link to={post.frontmatter.path}><h3>{post.frontmatter.title}</h3></Link>
        <small>{post.frontmatter.created}</small>
        <p>{post.frontmatter.description}</p>
    </div>
)
export default PostListItem

