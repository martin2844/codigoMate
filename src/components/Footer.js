import React from 'react'
import {Link} from 'gatsby'
import footerStyles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
            <a className={footerStyles.footerLinkBg} href="https://github.com/martin2844"><i className="fab fa-github"></i></a>
            <a className={footerStyles.footerLinkBg} href=""><i className="fab fa-linkedin"></i></a>
            <a className={footerStyles.footerLinkBg} href="https://www.youtube.com/channel/UC0KC477Zyljne5acOqab6Vg"><i className="fab fa-youtube"></i></a>
            
            </div>
            
             
            <p className={footerStyles.footerLinkSm}>codigoMate© 2019</p>
            
    
    
    
         </div>
    )
}


export default Footer
