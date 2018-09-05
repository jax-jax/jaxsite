import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/jax.logo.png'

const Menu= props =>

<nav id="menu">
   <header>
      <Link className="nav-logo" to="/"><img src= {logo}/> </Link>
      <ul>
         <li><a href="/work">Work</a></li>
         <li><a href="/about">About</a></li>
         <li><a href="/Contact">Contact</a></li>
      </ul>
   </header>
</nav>

/*

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/work">Work</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Photography</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}
*/
export default Menu
