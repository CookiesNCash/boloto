"use client";

import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import CreatePost from "../../components/post/CreatePost";
import AllPostByUser from "@/app/components/post/allPostByUser";
import AllPost from "../../components/post/AllPost";
import RightColumn from "@/app/components/recommendations/RightColumn";


export default function () {
  return (
    <div className="container-boloto no-select">
      <Header />
      <Main>
        <CreatePost />
        <AllPostByUser />
      </Main>
      <RightColumn />
    </div>
  );
}
