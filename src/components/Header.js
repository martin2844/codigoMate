import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/logo2.png'
import headerStyle from './Header.module.scss'


const Header = () => {
    return (
        <nav className={headerStyle.navbar}>
        <div className={headerStyle.brandTitle}>
                    <img className={headerStyle.logo}
                    alt=""
                    src={Logo}
                    width="28"
                    height="28"
                    />

                    codigoMate</div>
    
        <div className={headerStyle.navbarLinks}>
          <ul>
            <li><Link className={headerStyle.link} to="/">Home</Link></li>
            <li><Link className={headerStyle.link} to="/tutoriales">Tutoriales</Link></li>
            <li><Link className={headerStyle.link} to="/tutoriales">Blog</Link></li>
            <li><Link className={headerStyle.link} to="/tutoriales">Contacto</Link></li>

          </ul>
          
        
        </div>

        </nav>
    )
}

export default Header



