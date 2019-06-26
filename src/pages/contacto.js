import React from 'react'
import Layout from '../components/Layout'


import contactStyles from '../components/contact.module.scss'


  
 

const Contacto = () => {
  
    return (
        <Layout> 
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
<div className={contactStyles.container}>

      

<h1>Envíame un mensaje</h1>
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label >Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>



        
        



    </div>

        </Layout>
    );
}



export default Contacto