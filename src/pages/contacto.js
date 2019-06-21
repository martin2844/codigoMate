import React from 'react'
import Layout from '../components/Layout'


import contactStyles from '../components/contact.module.scss'


  
 

const Contacto = () => {
  
    return (
        <Layout> 
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
<div className={contactStyles.container}>

        <form
            noValidate autoComplete="off"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >

<h1>Envíame un mensaje</h1>
  <input placeholder="Tu Nombre" type="text"  value="" required />
  <input placeholder="Email" type="email" onblur="this.setAttribute('value', this.value);" value="" required />
  <span className={contactStyles.validationText}>Please enter a valid email address.</span>
  <div className={contactStyles.flex}>
    <textarea placeholder="Mensaje" rows="1" required></textarea>
  </div>
  <button>Enviar</button>




        </form>
        
        <a href="https://twitter.com/potasiocasillas" target="_blank"><i class="fab fa-twitter"></i>Tweeteame</a>



    </div>

        </Layout>
    );
}



export default Contacto