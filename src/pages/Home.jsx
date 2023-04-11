import React from "react";
import { useState, useEffect } from "react";

// components
import Marquee from "@components/Marquee";
import Title from "@components/Title";
import ScrollLine from "@components/Line";

export default function Home() {
  return (
    <div className="home">
      <div className="home__marquee">
        <Marquee />
      </div>
      <div className="home__container">
        <div className="home__container__title">
          <div className="home__container__title__wrapper">
            <h1>Syntax Erreur</h1>
          </div>
        </div>

        <ScrollLine mTop="auto" mHeight="400px" />

        <div className="home__container__projects">
          <div className="home__container__projects__title">
            <Title content="Projects" />
          </div>
        </div>
      </div>
    </div>
  );
}
