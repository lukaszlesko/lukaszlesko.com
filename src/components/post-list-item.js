import React from "react"
import { Link } from "gatsby"

const PostListItem = ({ post }) => (
    <section>
        <Link to={post.frontmatter.path}>
            <h3>{post.frontmatter.title}</h3>
            {post.frontmatter.description}
        </Link>
    </section>
)
export default PostListItem

