import React from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import logo from './CrLogo1.png';
import './Header.css';
// Импортируем иконки из react-icons
import { FaHome, FaTags, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="Header-navbar">
        <Container className="navbar-container">
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="65"
              width="87"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form inline className="ml-auto search-form">
              <FormControl
                type='text'
                placeholder='Искать на площадке'
                className='mr-sm-2'
              />
              <Button variant="outline-success" className="Header-NavBar-Button">Поиск</Button>
            </Form>
            <Nav className="ml-auto">
              {/* Заменяем текстовые ссылки на иконки */}
              <Nav.Link href="/ProfilePage" className="d-lg-none"> <FaUser style={{ fontSize: '40px' }}/></Nav.Link>
              <Nav.Link href="/ProfilePage" className="d-none d-lg-block"><FaUser style={{ fontSize: '40px' }}/></Nav.Link>
              <Nav.Link href="/" className="d-none d-lg-block"><FaHome style={{ fontSize: '40px'}} /></Nav.Link>
              <Nav.Link href="/Catalog" className="d-none d-lg-block"><FaTags style={{ fontSize: '40px'}} /></Nav.Link>
              <Nav.Link href="/Basket" className="d-none d-lg-block"><FaShoppingCart style={{ fontSize: '40px'}} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

