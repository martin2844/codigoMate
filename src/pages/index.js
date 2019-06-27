import React from "react";
import Layout from "../components/Layout";
import indexStyle from "../components/Index.module.scss"
import {Link} from 'gatsby';
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
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#663399',
    },
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
  }));




const Index = () => { 
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