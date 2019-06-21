import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const notFound = () => {
    return (
        <Layout>
            <h1>404</h1>
            <h2>Parece que esta pagina no existe!</h2>
            <Link to="/">Volver al Home</Link>
        </Layout>
    )
}

export default notFound