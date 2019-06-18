import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Tutoriales = ()=> {
    const blog = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node { 
                    frontmatter {
                        title,
                        date
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
                let url = "./tutoriales/" + edge.node.fields.slug;
                return (
                    <li className="noclass">
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