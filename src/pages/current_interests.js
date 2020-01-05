import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Current interests" />
        <h1>Current interests</h1>
        <ul>
            <li>Learning how to learn</li>
            <li>Gatsby</li>
        </ul>
    </Layout>
)

export default IndexPage
