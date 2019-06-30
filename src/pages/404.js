import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import {Helmet} from "react-helmet";

const notFound = () => {
    return (
        <Layout>
              <Helmet>
        <title>codigoMate | 404 not found</title>
        <meta name="description" content="404 not found" />
        <meta name="keywords" content="cursos, tutoriales, programacion web, programacion español" />
      </Helmet>
            <h1>404</h1>
            <h2>Parece que esta pagina no existe!</h2>
            <Link to="/">Volver al Home</Link>
        </Layout>
    )
}

export default notFound