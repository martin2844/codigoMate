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
  }));




const Index = () => { 
    const classes = useStyles()
    return (
<Layout>
<div className={indexStyle.jumbotron}>
<h1>Bienvenidos!</h1>
<h2>La programación web crece todos los dias, aprendamos juntos</h2>
<p>En este sitio vas a poder encontrar tutoriales de diseño y programación web. Javascript, css, html, y frameworks.</p>
<p>De argentina para el mundo</p>
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