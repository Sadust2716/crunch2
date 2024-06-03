import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import LoginPageTest1 from "../assets/LoginPageTest1.jpg";
import { Link } from 'react-router-dom';

const RegPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику для регистрации нового пользователя
    console.log('Регистрация', formData);
  };

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col md="6" className="d-flex align-items-center">
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Container style={{width: '500px' }}>
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control
                    style={{
                      display: "flex",
                      alignItems: "right",
                      justifyContent: "right",
                      height: "100%"}}
                type="email"
                placeholder="Введите ваш email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-4">Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите ваш пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-4" variant="light">Подтвердите пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Подтвердите ваш пароль"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit" style={{ marginTop: "30px" }}>
              Зарегистрироваться
            </Button >
            <p style={{ marginTop: "10px" }}>
              Уже есть аккаунт? <Link to="/LoginPage">Войдите</Link>.
            </p>
            </Container>
          </Form>
        </Col>
        <Col md="6" className="d-none d-md-block"> {/* Для больших экранов */}
          <Image src={LoginPageTest1} fluid />
        </Col>
      </Row>
    </Container>
  );
};
export default RegPage;

