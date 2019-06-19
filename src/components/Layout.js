import React from 'react'
import Header from './Header'
import Footer from './Footer'
import layoutStyle from './Layout.module.scss'



const Layout = (props) => {
    return (
        <div>
  
<Header/>

        <div className={layoutStyle.main}>
            <div className={layoutStyle.main2}>
                    {props.children}
            </div>
        
        </div>
<Footer/>


        </div>
    );
}

export default Layout