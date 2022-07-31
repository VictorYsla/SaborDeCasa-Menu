import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const screenWidth = window.screen.width;

  useEffect(() => {
    console.log("screenWidth");
  }, [screenWidth]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#000000",
        height: "100vh",
      }}
    >
      <img
        src={require("../src/menu/domingo31.jpeg")}
        alt="car"
        style={{
          height: "80%",
          width: isMobile ? "100%" : undefined,
        }}
      />
      <div
        style={{ justifyContent: "flex-start" }}
        className="top-element-formatting"
      >
        <a
          href="https://maps.app.goo.gl/B3zmn9fbsAtaBsiF7"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          Nuestra ubicación
        </a>
        <div
          className="top-element-formatting"
          style={{ color: "white", fontSize: 14 }}
        >
          (Presiona aquí)
        </div>
      </div>
    </div>
  );
}

export default App;
