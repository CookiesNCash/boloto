"use client";

import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import CreatePost from "../../components/post/CreatePost";
import Post from "../../components/post/Post";
import AllPost from "../../components/post/AllPost";
import RightColumn from "@/app/components/recommendations/RightColumn";

export default function () {
  return (
    <div className="container-boloto no-select">
      <Header />
      <Main>
        <CreatePost />
        <AllPost />
        <Post
          text="11 years ago today, BTS made their debut."
          img="../bts.png"
          author={{
            name: "Иоан",
            photo: "../Иоан.jpeg",
            id: "@pro100cowboyyyyyyyJoeBidenyyyyyy",
          }}
        />
        <Post
          text="Я фанатка Головача"
          img="../legend.jpeg"
          author={{ name: "Андрей", photo: "../Андрей.jpeg", id: "@teregiray" }}
        />
      </Main>
      <RightColumn />
    </div>
  );
}
