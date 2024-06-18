"use client";

import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { useState } from 'react';

export default function logIn () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const logInBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/auth/signin`, {
        email: email,
        password: password,
      });

      console.log(response.data);
      // Сохраняем access token в localStorage
      const { access_token } = response.data;
      localStorage.setItem('accessToken', access_token);
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div className="form-div">
      <div className="logo-div">
        <Image
          className="logo"
          src="/logo.jpeg"
          alt=""
          width={50}
          height={50}
          priority
        />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="h3">Вход в Болото</div>
          <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Сохранить вход" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" onClick={(e) => logInBtn(e)}>
            Войти
          </Button>
          <Button variant="primary" type="submit">
            Забыли пароль?
          </Button>
        </div>
        <div className="create-acc">
          <p>Нет аккаунта?</p>
          <a className="sing-up" href="./boloto/welcome">
            Создать аккаунт
          </a>
        </div>
      </Form>
    </div>
  );
}

