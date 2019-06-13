import React from 'react'
import {Link} from 'gatsby'
import { Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import Logo from '../images/logo2.png'
import headerStyle from './Header.module.css'


const logoStyle = {
    paddingBottom: "0px",
    marginRight:"-10px",
    marginBottom:"0px"
    

}


const Header = () => {
    return (
        <div className={headerStyle.font}>
           <Navbar className={headerStyle.pad} bg="light" expand="lg">
           <div className={headerStyle.bounce}><Navbar.Brand href="#">
      <img
        alt=""
        src={Logo}
        style={logoStyle}
        width="28"
        height="28"
        className="d-inline-block align-top"
      />
      </Navbar.Brand>
      <Link to="/" className="navbar-brand">codigoMate</Link>
      </div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/" className="nav-link" >Home</Link>
      <Link to="/tutoriales" className="nav-link">Tutoriales</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
      <Link to="/contacto" className="nav-link">Contacto</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header