import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import {Helmet} from "react-helmet";

const notFound = () => {
    return (
        <Layout>
            <Helmet>
        <title>codigoMate | Success</title>
        <meta name="description" content="success" />
        <meta name="keywords" content="mensaje enviado" />
      </Helmet>
            <h1>Gracias por envíar el mensaje</h1>
            <h2>En breve estaré respondiendo</h2>
            <Link to="/">Volver al Home</Link>
        </Layout>
    )
}

export default notFound