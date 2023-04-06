import React from "react";

// components
import Marquee from "@components/Marquee";

export default function Home() {
  return (
    <div className="home">
      <div className="home__marquee">
        <Marquee />
      </div>
    </div>
  );
}
