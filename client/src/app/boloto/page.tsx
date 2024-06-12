"use client"
import React from "react"
import Header from "../components/Header";
import Main from "../components/Main";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

export default function (){
      return (
        <div className="container-boloto">
            <Header />
            <Main>
            <CreatePost />
            <Post text={'11 years ago today, BTS made their debut.'} img={'./bts.png'} author={{name: 'Иоан', photo:'./Иоан.jpeg', id:'@pro100cowboyyyyyyyJoeBidenyyyyyy'}}/>
            <Post text={'Я фанатка Головача'} img={'./legend.jpeg'} author={{name: 'Андрей', photo:'./Андрей.jpeg', id:'@teregiray'}}/>
            </Main>
        </div>
      
      );
}

{/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}