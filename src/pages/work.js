import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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

        <h1>This is a Work page</h1>

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
