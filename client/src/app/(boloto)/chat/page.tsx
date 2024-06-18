"use client";
import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import RightColumn from "@/app/components/recommendations/RightColumn";
import MainChat from "@/app/components/chat/MainChat";

export default function () {
  return (
    <div className="container-boloto no-select">
      <Header />
      <Main>
       <MainChat></MainChat>
      </Main>
      {/* <RightColumn /> */}
    </div>
  );
}
