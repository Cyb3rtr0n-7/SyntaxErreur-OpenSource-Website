import React from "react";

// components
import Marquee from "@components/Marquee";

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
      </div>
    </div>
  );
}
