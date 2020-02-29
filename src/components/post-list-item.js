import React from "react"
import { Link } from "gatsby"

const PostListItem = ({ post }) => (
    <div style={{
        marginBottom: `3rem`
    }}>
        <Link to={post.frontmatter.path}>
            <h3>{post.frontmatter.title}</h3>

            <span>{post.frontmatter.description}</span>
        </Link>
    </div>
)
export default PostListItem

