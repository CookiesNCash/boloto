"use client"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image'

function BasicExample() {
  return (
    <>
      <div className='form-div'>
      <div className='logo-div'>
      <Image
          className='logo'
          src="/logo.png"
          alt="Vercel Logo"
          width={50}
          height={50}
          priority
      />
      </div>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className='h3'>Вход в Болото</div>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Сохранить вход" />
      </Form.Group>
      <div className='d-grid gap-2'>
        <Button variant="primary" type="submit">
        Войти
      </Button>
      <Button variant="primary" type="submit">
        Забыли пароль?
      </Button>
      </div>
      <div className='create-acc'>
        <p>Нет аккаунта?</p>
        <a className='sing-up' href="./boloto/welcome">Создать аккаунт</a>
      </div>
    </Form>
    </div>
    </>
  );
}

export default BasicExample;