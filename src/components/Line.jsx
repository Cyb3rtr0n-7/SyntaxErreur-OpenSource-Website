import React from "react";
import { useState, useEffect } from "react";

export default function Line(props) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setHeight(0 + scrollPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="home__container__scrollLine home__container__scrollLine1"
      style={{
        height: `${height}px`,
        marginTop: props.mTop,
        maxHeight: props.mHeight,
      }}
    ></div>
  );
}
