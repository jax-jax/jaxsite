import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Created & Designed by Jacklyn Phu</p>
        <p className="icon fa-camera-retro copyright"> Photo by Bailey Zindel</p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
