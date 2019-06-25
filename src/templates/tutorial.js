import React from 'react'
import { graphql } from 'gatsby'
import tutorialStyle from '../components/tutorial.module.scss'
import Layout from '../components/Layout'






export const query = graphql`
query ( $slug: String!) { 
      
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter { 
        title
        date
        }
        html
      }
  }`



const Tutorial = (props)=> { 






    return (
        <Layout>
            <container className={tutorialStyle.main}>
            <h1> {props.data.markdownRemark.frontmatter.title} </h1>
            <p className={tutorialStyle.date}>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </container>
          




        </Layout>
    )
}

export default Tutorial