import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Current interests" />
        <h1>Current interests</h1>
        <ul>
            <li>General: Learning how to learn</li>
            <li>Product management: data analysis, goals & metrics</li>
            <li>Engineering: Gatsby</li>
            <li>Engineering: GraphQL</li>
        </ul>
    </Layout>
)

export default IndexPage
