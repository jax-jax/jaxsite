import React from 'react'
import Link from 'gatsby-link'
import Menu from'../components/Menu'

const Banner = (props) => (
    <header id="logo_2" className="alt">
        <Link to="/" className="logo_2"><img id="jaxlogo" src="http://localhost:8000/static/jax.logo.559efdd4.png" width="100%"/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Banner
