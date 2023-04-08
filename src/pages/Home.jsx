import React from "react";
import { useState, useEffect } from "react";

// components
import Marquee from "@components/Marquee";

export default function Home() {
  const [height, setHeight] = useState(0); // initial height of div is 100px

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setHeight(0 + scrollPosition); // increase height by scroll position
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        <div
          className="home__container__scrollLine home__container__scrollLine1"
          style={{
            height: `${height}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
