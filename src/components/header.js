import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header
        style={{
            marginBottom: `1.45rem`,
            display: `flex`,
            justifyContent: `left`,
            flexDirection: 'column',
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1rem`
        }}
    >
        <div>
            <Link
                to="/"
                style={{
                    color: `black`,
                    textDecoration: `none`,
                }}
                >
                {siteTitle}
            </Link> 
        </div>

        <nav>
            <ul
                style={{
                    display: `flex`,
                    listStyleType: `none`,
                    padding: 0,
                    justifyContent: `space-between`
                }}>
                <li><Link to="/">About</Link></li>
                <li><Link to="/current_interests">Current interests</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/inspirations">Inspirations</Link></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
