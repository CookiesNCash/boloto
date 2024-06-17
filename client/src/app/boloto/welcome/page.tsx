"use client";

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import DropDownDate from '../../components/DropDownDate';

const month = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const years = [2024];
for (let year = 2023; year >= 1950; year--) {
  years.push(year);
}

function BasicExample() {
  return (
    <div className="form-div">
      <div className="logo-div">
        <Image
          className="logo"
          src="/logo.png"
          alt="Vercel Logo"
          width={50}
          height={50}
          priority
        />
      </div>
      <Form>
        <div className="h3">Создать новый аккаунт</div>
        <div className="registration-name">
          <Form.Group className="mb-1" controlId="name">
            <Form.Control type="email" placeholder="Имя" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="SecondName">
            <Form.Control type="email" placeholder="Фамилия" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="New password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="repeatFormBasicPassword">
          <Form.Control type="password" placeholder="Repeat password" />
        </Form.Group>

        <div className="select gender">
          Ваш пол?
          <Form.Group className="radio-group1">
            <Form.Check
              className="radioGp1"
              inline
              label="мужской"
              name="group1"
              type="radio"
            />
            <Form.Check
              className="radioGp1"
              inline
              label="женский "
              name="group1"
              type="radio"
            />
          </Form.Group>
        </div>
        <div className="select birthday">
          <p>День рождение</p>
          <div className="dropDown-group">
            <DropDownDate arr={month} name="Месяц" />
            <DropDownDate arr={day} name="День" />
            <DropDownDate arr={years} name="Год" />
          </div>
        </div>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Создать
          </Button>
        </div>
        <div className="create-acc">
          <a className="sing-up" href="../../">
            Уже есть аккаунт?
          </a>
        </div>
      </Form>
    </div>
  );
}

export default BasicExample;
