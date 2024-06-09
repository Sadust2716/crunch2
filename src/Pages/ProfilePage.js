import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./ProfilePage.css";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
    photo: ''
  });

  useEffect(() => {
    // Логика для получения данных профиля с бэка
    const profileDataFromBackend = {
      fullName: 'Иван Иванов',
      email: 'ivan@example.com',
      phone: '123-456-7890',
      photo: 'url/to/photo.jpg'
    };
    setProfileData(profileDataFromBackend);
  }, []);

  return (
    <Container className="ProfilePage text-center">
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <Form className="Form-container">
            <Form.Group>
              <Form.Label>Имя и Фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите ваше имя и фамилию"
                name="fullName"
                value={profileData.fullName}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите ваш email"
                name="email"
                value={profileData.email}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Введите ваш номер телефона"
                name="phone"
                value={profileData.phone}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Фотография</Form.Label>
              <img src={profileData.photo} alt="User" className="profile-photo" />
            </Form.Group>
            <Button variant="info" className="mb-2">Сменить пароль</Button>
            <Button variant="warning" className="mb-2">История заказов</Button>
            <Button variant="danger" className="mb-2">Выйти</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;


