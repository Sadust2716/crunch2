import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginPageTest1 from "../assets/LoginPageTest1.jpg"

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
    <Container className="mb-2">
      <Row className="justify-content-md-center">
        <Col md="6" className="d-flex align-items-center">
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Container style={{width: '500px' }}>
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control
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
                type="password"
                placeholder="Введите ваш пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-4">
              Войти
            </Button>
            <p style={{ marginTop: "10px" }}>
            Если нет аккаунта, <Link to="/RegPage">можете зарегистрироваться</Link>.
          </p>
        </Container>
          </Form>
        </Col>
        <Col md="6" className="d-none d-md-block"> {/* Для больших экранов */}
          <Image src={loginPageTest1} fluid />
        </Col>
      </Row>
    </Container>  
  );
};

export default LoginPage;

