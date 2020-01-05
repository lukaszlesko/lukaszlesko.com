import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Publications" />
        <h1>Publications</h1>
        
        <h3>Can you be a good Product Owner without a great team? I don’t think so.</h3>
        <p>See why great team matters... a lot!</p>
        <p><a href="https://medium.com/@luiluigiani/can-you-be-a-good-product-owner-without-a-great-team-i-dont-think-so-662bf045122d" rel="noopener noreferrer" target="_blank">read on Medium</a></p>

        <h3>Product Owner cheat sheet to start initiatives smoothly</h3>
        <p>Simple 3 steps to start your initiative right away without losing time!</p>
        <p><a href="https://medium.com/@luiluigiani/product-owner-cheat-sheet-to-start-initiatives-smoothly-f8c86595adc6" rel="noopener noreferrer" target="_blank">read on Medium</a></p>
    </Layout>
)

export default IndexPage
