import React, { Component } from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl, Row, Col } from 'react-bootstrap';
import logo from './CrLogo1.png';
import './Header.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
        <>
            <Navbar  collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        
                        <img
                            src={logo}
                            height="80"
                            width="110"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> 
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container>
                         <Row>
                          <Col sm={7}>
                           <Form inline className="ml-lg">
                            <FormControl
                                type='text'
                                placeholder='Искать на площадке'
                                className='mb - 3'
                            />
                           </Form>
                          </Col>
                          <Col sm={1}>
                          <Button variant="outline-success">Поиск</Button> 
                          </Col>
                          <Col>
                           <Nav>
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/about">О нас</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/blog" >Блог</Nav.Link>
                           </Nav>
                          </Col>
                         </Row>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Router>
                <Routes>
                 <Route path ="/" element ={<Home />} />
                 <Route path ="/about" element ={<About />} />
                 <Route path ="/contacts" element ={<Contacts />} />
                 <Route path ="/blog" element ={<Blog />} />
                </Routes>
            </Router>
        </>
        )
    }
}

