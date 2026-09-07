import { useState } from "react";
import "./App.css";

import { HomeScene } from "./scenes/HomeScene";
import { SelectCuentoScene } from "./scenes/SelectCuentoScene";
import { MapScene } from "./scenes/MapScene";

function App() {
  const [scene, setScene] = useState("home");
  const [cuento, setCuento] = useState(null);

  function handleStart() {
    setScene("select");
  }

  function handlePickCuento(cuento) {
    setCuento(cuento);
    setScene("mapa");
  }

  return (
    <>
      {scene === "home" && <HomeScene onStart={handleStart} />}

      {scene === "select" && (
        <SelectCuentoScene
          onSelect={handlePickCuento}
          onBack={() => setScene("home")}
        />
      )}

      {scene === "mapa" && (
        <MapScene
          cuento={cuento}
          onBack={() => setScene("select")}
        />
      )}
    </>
  );
}

export default App