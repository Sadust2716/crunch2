import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./LoginPage.css"

const LoginPage = () => {
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
    
    try {
      const response = await fetch('http://your-api-endpoint/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Аутентификация прошла успешно
        console.log('Пользователь успешно вошел');
        // Редирект пользователя на другую страницу
        // history.push('/dashboard');
      } else {
        console.error('Ошибка при входе');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };
  return (
    <Container className="LoginPage-LoginPage-container">
      <Row className="justify-content-center align-items-center">
        <Col Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} className="LoginPage-form-container">
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="LoginPage-formControlEmail-container"
                type="email"
                placeholder="Введите ваш email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-4" >Пароль</Form.Label>
              <Form.Control
                className="LoginPage-formControlPassword-container"
                type="password"
                placeholder="Введите ваш пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="LoginPage-form-button">
              Войти
            </Button>
            <p style={{ marginTop: "10px" }}>
            Если нет аккаунта, <Link className="LoginPage-link" to="/RegPage">можете зарегистрироваться</Link>
          </p>
          </Form>
        </Col>
      </Row>
    </Container>  
  );
};

export default LoginPage;

