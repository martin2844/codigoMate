import React from "react";
import Layout from "../components/Layout";
import indexStyle from "../components/Index.module.scss"
import {Link , graphql, useStaticQuery} from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import UltimosTuts from '../components/ultimostuts';

const useStyles = makeStyles(theme => ({
    button: {
      margin: "10px 0 0",
      backgroundColor: "#007bff",

    },
    input: {
      display: 'none',
    },
  }));

 


const Index = () => { 
  const query = useStaticQuery(graphql`
  query {
      allMarkdownRemark (
        sort: {fields: frontmatter___date, order: DESC}
        
       )
      
      
      {
          edges {
              node { 
                  frontmatter {
                      title,
                      date,
                      type,
                      abs,
                      tag,
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

  console.log(query)
    const classes = useStyles()
    return (
<Layout>
<div className={indexStyle.jumbotron}>
<h1>Bienvenidos!</h1>
<h2>La programación web crece todos los dias, aprendamos juntos</h2>
<p>En este sitio vas a poder encontrar tutoriales de diseño y programación web. Javascript, css, html, y frameworks.</p>
<p>Videos cortos, largos, cursos completos. Un poco de todo, y sobre todo en español!</p>
<div >
    <Link className={indexStyle.nodecor} to="/tutoriales">
    <Button  variant="contained" color="primary" className={classes.button}>
       Empezemos !
      </Button>
      </Link>
      
      </div>
      
</div>

<h2>Ultimos tutoriales</h2>
<UltimosTuts />

</Layout>
    );

}

export default Index