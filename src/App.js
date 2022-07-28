import "./App.css";

function App() {
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ff914f",
        height: "100vh",
      }}
    >
      <img
        src={require("../src/menu/7b17a35b-cc94-4567-9d6f-fd685ea56173.jpeg")}
        alt="car"
        style={{
          height: "80%",
          width: isMobile ? "100%" : undefined,
        }}
      />
      <a
        href="https://maps.app.goo.gl/B3zmn9fbsAtaBsiF7"
        target="_blank"
        rel="noreferrer"
      >
        Nuestra ubicación
      </a>
    </div>
  );
}

export default App;
