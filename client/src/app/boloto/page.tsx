"use client"
import React from "react"
import Header from "../components/Header";
import Main from "../components/Main";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { selectAllPosts } from "../../redux/slices/postsSlice";
import { useSelector } from "react-redux";
import AllPost from "../components/AllPost";

export default function (){
  const allPost = useSelector(selectAllPosts)

      return (
        <div className="container-boloto">
            <Header />
            <Main>
            <CreatePost />
            <Post text={'11 years ago today, BTS made their debut.'} img={'./bts.png'} author={{name: 'Иоан', photo:'./Иоан.jpeg', id:'@pro100cowboyyyyyyyJoeBidenyyyyyy'}}/>
            <Post text={'Я фанатка Головача'} img={'./legend.jpeg'} author={{name: 'Андрей', photo:'./Андрей.jpeg', id:'@teregiray'}}/>
             <AllPost></AllPost>
            </Main>
        </div>
      );
}
