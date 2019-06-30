import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import aboutStyle from '../components/about.module.scss'
import Img from "gatsby-image"
import {Helmet} from "react-helmet";


export const query = graphql`
  query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AcercaDe = (props) => {
    console.log(props.data.file)
    return (
   
        <Layout>
                 <Helmet>
        <title>codigoMate | Acerca de</title>
        <meta name="description" content="about page, acerca de" />
        <meta name="keywords" content="quien soy, contactame, javascript, tutorial" />
      </Helmet>
             <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
            <h1>Acerca de</h1>
            <h2>Hola, me llamo Martin</h2>

            <div className={aboutStyle.main}>
            

            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}><Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
                <div className={aboutStyle.texto}>

                <div className={aboutStyle.iconos}><i class="fas fa-map-marker-alt"></i><p>Buenos Aires, Argentina</p></div>
            <div className={aboutStyle.iconos}><i class="fas fa-graduation-cap"></i><p>Universidad de Buenos Aires</p></div>
            <div className={aboutStyle.iconos}><i class="fas fa-code"></i><p>HTML, JS, CSS, noSQL</p></div>
            <div className={aboutStyle.iconos}><i class="fas fa-language"></i><p>Castellano, Inglés, Portugués</p></div>
            


                </div>
          
            </div>
            <div className={aboutStyle.derecha}>
            <p>
                ¿Quién soy? Soy un Arquitecto recibido de la UBA, un programador web autodidacta, 
                y mecánico del ITCA. Hablo Ingles, Portugués, un poco de Francés y Español.</p>
            <p> Me encanta aprender cosas nuevas, sobre todo en cuanto a la programación web, y mi sueño es poder compartir lo que aprendo
                con todos los que recien empiezan para poder hacerles el camino en cuanto al aprendizaje autodidacta más fácil </p>
                <p>Desde muy chico me intereso el HTML y el diseño web, pero lo deje de lado al comenzar la carrera de Arquitectura,
                    acompañame entonces a redescubrirlo.
                </p>
                <p>Me encantaria saber sobre vos! mandame un mensaje</p>
                <div className={aboutStyle.socialContainer}>
                <a className={aboutStyle.social} href="https://github.com/martin2844"><i className="fab fa-github"></i></a>
            <a className={aboutStyle.social} href="https://www.instagram.com/codigo.mate/"><i className="fab fa-instagram"></i></a>
            <a className={aboutStyle.social} href="https://www.youtube.com/channel/UC9nNIxlNohIoIrjtC4ueIOA"><i className="fab fa-youtube"></i></a>
                <a className={aboutStyle.social} href="https://www.twitter.com/codigomate"><i class="fab fa-twitter"></i></a>
                </div>


            </div>

            </div>
           
        </Layout>
    )
}

export default AcercaDe