import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Menu from "../components/Menu.js"


class WorkPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
        </Helmet>
        <div>
            <h1>Work Work Work Work</h1>
         </div>
         <section>
            <div>
               <header>Dippin Daisy</header>

               <h3>Production Logistic Manager</h3>
               <p>Swimwear Made in the USA</p>
               <p>Production Logistic/Projection Reports/Graphic Designer/Technology Management</p>

               <a>View Project</a>

            </div>
         </section>
      </div>
    )
  }
}

export default WorkPage

export const pageQuery = graphql`
  query WorkPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
