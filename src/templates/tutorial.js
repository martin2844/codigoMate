import React from 'react'
import { graphql } from 'gatsby'
import tutorialStyle from '../components/tutorial.module.scss'
import Layout from '../components/Layout'
import {Helmet} from "react-helmet";





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
           <Helmet>
        <title>codigoMate | {props.data.markdownRemark.frontmatter.title}</title>
        <meta name="description" content={props.data.markdownRemark.frontmatter.title} />
        <meta name="keywords" content="cursos, tutoriales, programacion web, programacion español" />
      </Helmet>
            <container className={tutorialStyle.main}>
            <h1> {props.data.markdownRemark.frontmatter.title} </h1>
            <p className={tutorialStyle.date}>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </container>
          




        </Layout>
    )
}

export default Tutorial