import React from 'react'
import jaxlogo from '../images/jax.logo.png'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="logo">
            <span><img id="jaxlogo" src={jaxlogo} width= "100%"/></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Designer</h1>
                <p>Create holistic solutions with intent and purpose</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/work">Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
