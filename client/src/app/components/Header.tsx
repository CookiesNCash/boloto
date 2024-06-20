import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiMessageCircle } from 'react-icons/fi';
import { MdNotificationsNone } from 'react-icons/md';
import { IoHomeOutline, IoNewspaperOutline } from 'react-icons/io5';
import ProfileNav from './ProfileNav';

export default function Header() {
  return (
    <header className="header">
      <div className="nav-header-flex">
        <div className="centerDiv">
          <Navbar expand="xxl" className="bg-body-tertiary header-nav bg-black">
            <Container className="header-nav">
              <div className="header-logo">
                <Image
                  className="logo"
                  src="/logo.jpeg"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                  priority
                />
                <span className="logo-name">Болото</span>
              </div>
              <Nav className="me-auto">
                <div className="div-nav hover-btn-grey">
                  <IoHomeOutline />
                  <Nav.Link href="/home">Моё болото</Nav.Link>
                </div>
                <div className="div-nav hover-btn-grey">
                  <FiMessageCircle />
                  <Nav.Link href="/chat">Кваки</Nav.Link>
                </div>
                <div className="div-nav hover-btn-grey">
                  <MdNotificationsNone />
                  <Nav.Link href="#notifications">Бульки</Nav.Link>
                </div>
                <div className="div-nav hover-btn-grey">
                  <IoNewspaperOutline />
                  <Nav.Link href="/News">Жижа</Nav.Link>
                </div>
              </Nav>
            </Container>
          </Navbar>
        </div>

        <div className="profile-div">
          <ProfileNav
            user={{ name: 'Андрей', photo: '../Андрей.jpeg', id: '@teregiray' }}
          />
        </div>
      </div>
    </header>
  );
}
