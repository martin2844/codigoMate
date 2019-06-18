import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Tutoriales = ()=> {
    const blog = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node { 
                    frontmatter {
                        title,
                        date,
                        featuredImage {
                            relativePath,
                            absolutePath,
                            childImageSharp{
                                fixed(width: 300) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                            
                    }
                    html,
                    excerpt,
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `
    );


    let pijon = blog.allMarkdownRemark.edges;
    return (
        <Layout>
           
            
            <h1>Tutoriales</h1>
            <ol className="noclass">
            {
            pijon.map((edge)=> {
                let url = "./tutorial/" + edge.node.fields.slug;
                console.log(edge.node.frontmatter.featuredImage.childImageSharp.fixed)
                
                return (
                    <li className="noclass">
                        <Img fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed} />
                        <Link to={url} >
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                        </Link>
                        
                    </li>
                )
            })
            }
        </ol>
    
        </Layout>
    )
}

export default Tutoriales