import { useState } from "react";
import { REGIONS } from "../../db";
import { CuentoReader } from "../../utils/CuentoReader";

const REGION_LABELS = {
  paisa: "Paisa",
  rolo: "Rolo",
  costeño: "Costeño",
};

function MapScene({ cuento, onBack }) {
  const [region, setRegion] = useState("paisa");

  return (
    <section className="d-flex flex-column align-items-center gap-4 min-vh-100 p-3">
      <button className="btn btn-light align-self-start" onClick={onBack}>
        Volver
      </button>

      <div className="d-flex gap-3">
        {REGIONS.map((regionName) => (
          <button
            key={regionName}
            className={`btn btn-lg ${
              region === regionName ? "btn-light" : "btn-outline-light"
            }`}
            onClick={() => setRegion(regionName)}
          >
            {REGION_LABELS[regionName]}
          </button>
        ))}
      </div>

      {/* Panel de lectura actual: una región a la vez.
          Para comparar, renderizar aquí varios CuentoReader lado a lado. */}
      <CuentoReader cuento={cuento} region={region} />
    </section>
  );
}

export { MapScene };