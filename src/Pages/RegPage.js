import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./RegPage.css";

const RegPage = () => {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: ''
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    const { email, password } = formData;

    if (!email || !password) {
        console.log('Пожалуйста, заполните все поля');
        return;
    }

    const data = { email, password };

    const response = await fetch('/register/', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify(data), 
    }); 

    const responseData = await response.json(); 
    console.log(responseData.message); 
};
  return (
    <Container fluid className="RegPage-RegPage-container">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} className="RegPage-form-container">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="RegPage-formControlEmail-container"
                type="email"
                placeholder="Введите email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
              className="RegPage-formControlPassword-container"
                type="password"
                placeholder="Введите пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Подтвердите пароль</Form.Label>
              <Form.Control
               className="RegPage-formControlConfirm-container"
                type="password"
                placeholder="Подтвердите пароль"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="RegPage-form-button" variant="success" type="submit" style={{ marginTop: "20px" }}>
              Зарегистрироваться
            </Button>
            <p style={{ marginTop: "10px" }}>
              Уже есть аккаунт? <Link to="/LoginPage">Войдите</Link>.
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegPage;



