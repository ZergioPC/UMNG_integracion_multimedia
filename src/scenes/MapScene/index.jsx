import { useState } from "react";
import { REGIONS } from "../../db";
import { CuentoReader } from "../../utils/CuentoReader";
import styles from "./MapScene.module.css";

const REGION_LABELS = {
  paisa: "Paisa",
  rolo: "Rolo",
  costeño: "Costeño",
};

function MapScene({ cuento, onBack }) {
  const [region, setRegion] = useState("paisa");

  return (
    <section className={styles.MapScene}>
      <button className={styles.backButton} onClick={onBack}>
        Volver
      </button>

      <div className={styles.regionSelector}>
        {REGIONS.map((regionName) => (
          <button
            key={regionName}
            className={`${styles.regionButton} ${
              region === regionName ? styles.active : ""
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