import React from "react";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { CgProfile } from "react-icons/cg";
import { FiMessageCircle } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

export default function Header () {
    return (
        <header className="header">
            <div className="header-logo">
                <Image
                className='logo'
                src="/logo.png"
                alt="Vercel Logo"
                width={50}
                height={50}
                priority
            />
            <p>Болото</p>
            </div>
           
             <Navbar expand="xxl" className="bg-body-tertiary header-nav">
              <Container className='header-nav'>
              <Nav className="me-auto">
                <div className="div-nav">
                <IoHomeOutline />
                <Nav.Link href="#home">Моя Страница</Nav.Link>
                </div>
                <div className="div-nav">
                <FiMessageCircle />
                <Nav.Link href="#message">Сообщение</Nav.Link>
                </div>
                <div className="div-nav">
                <MdNotificationsNone/>
                <Nav.Link href="#notifications">Уведомление</Nav.Link>
                </div>
                <div className="div-nav">
                <CgProfile />
                <Nav.Link href="#profile">Профиль</Nav.Link>     
                </div>
              </Nav>
              </Container>
             </Navbar>
        
        </header>
    )
}