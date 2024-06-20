'use client';

import React, { MouseEventHandler, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
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

export default function BasicExample() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const signUpBtn: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST_URL}/auth/signup`,
        { email, password },
      );
      // Сохраняем access token в localStorage
      console.log(response)
      const { access_token } = response.data;
      localStorage.setItem('accessToken', access_token);
      router.push('../');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="form-div">
      <div className="logo-div">
        <Image
          className="logo"
          src="/logo.jpeg"
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
            <Form.Control type="email" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-1" controlId="SecondName">
            <Form.Control type="email" placeholder="Фамилия" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />
        </Form.Group>
    

        {/* <div className="select gender">
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
        </div> */}
      {/* <div className="select birthday">
        <p>День рождение</p>
        <div className="dropDown-group">
          <DropDownDate arr={month} name="Месяц" />
          <DropDownDate arr={day} name="День" />
          <DropDownDate arr={years} name="Год" />
        </div>
      </div> */}

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" onClick={(e) => signUpBtn(e)}>
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
