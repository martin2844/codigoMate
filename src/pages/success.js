import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const notFound = () => {
    return (
        <Layout>
            <h1>Gracias por envíar el mensaje</h1>
            <h2>En breve estaré respondiendo</h2>
            <Link to="/">Volver al Home</Link>
        </Layout>
    )
}

export default notFound