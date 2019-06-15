import React from 'react'
import Header from './Header'
import Footer from './Footer'



const marginSmall = {
    margin: "4rem 1rem 1rem",
    background: "red"
   
}


const Layout = (props) => {
    return (
        <div>
  
<Header/>

        <div>
            <div style={marginSmall}>

{props.children}
            </div>
        
        </div>
<Footer/>


        </div>
    );
}

export default Layout