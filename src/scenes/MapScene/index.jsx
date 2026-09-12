import { useState } from "react";
import { REGIONS } from "../../db";
import { CuentoReader } from "../../utils/CuentoReader";
import { CuentoComparer } from "../../utils/CuentoComparer";

const REGION_LABELS = {
  paisa: "Paisa",
  rolo: "Rolo",
  costeño: "Costeño",
};

const VIEWS = [
  { key: "lectura", label: "Cuento" },
  { key: "comparar", label: "Comparar" },
];

function MapScene({ cuento, onBack }) {
  const [region, setRegion] = useState("paisa");
  const [view, setView] = useState("lectura");

  return (
    <section className="d-flex flex-column align-items-center gap-4 min-vh-100 p-3">
      <button className="btn btn-light align-self-start" onClick={onBack}>
        Volver
      </button>

      {/* Selector de vista: lectura normal o comparación */}
      <div className="btn-group" role="group" aria-label="Vista">
        {VIEWS.map(({ key, label }) => (
          <button
            key={key}
            className={`btn btn-lg ${
              view === key ? "btn-light" : "btn-outline-light"
            }`}
            onClick={() => setView(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {view === "lectura" ? (
        <>
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

          <CuentoReader cuento={cuento} region={region} />
        </>
      ) : (
        <CuentoComparer cuento={cuento} />
      )}
    </section>
  );
}

export { MapScene };