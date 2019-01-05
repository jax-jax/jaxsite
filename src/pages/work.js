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
            <h1>Work Descriptions</h1>
         </div>
         <section id="VivaUSA" class="workdes">
            <div>
               <h2>Viva USA / Dippin Daisy</h2>

               <h3>Production Logistic Coordinator / Production Assistant</h3>
               <h4>Swimwear Made in the USA</h4>
               <p>Production Logistic/ Pre-Production/ Projection Reports/Graphic Designer/Technology Management</p>

               <a>View Project</a>

            </div>
         </section>

         <section id="Acestss" class="workdes">
            <div>
               <h2>Aces Technology Service & Solutions</h2>

               <h3>Frontend Consultant</h3>
               <h4>Hybrid Cloud Platform</h4>
               <p>Frontend Design/ Wireframes-mockups/ Workflow Analyst / QA Testing Engineer</p>

               <a>View Project</a>

            </div>
         </section>

         <section id="Lemorellc" class="workdes">
            <div>
               <h2>Lemore LLC </h2>

               <h3>Marketing Consultant</h3>
               <h4>Marketing Firm</h4>
               <p>B2B & B2C Marketing Campaign Coordinator/ Copywriter/ Market Researcher/ Social Media Management</p>

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
