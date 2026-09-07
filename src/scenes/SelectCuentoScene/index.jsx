import { CUENTOS } from "../../db";
import styles from "./SelectCuentoScene.module.css";

function SelectCuentoScene({ onSelect, onBack }) {
  return (
    <section className={styles.SelectCuentoScene}>
      <button className={styles.backButton} onClick={onBack}>
        Volver
      </button>

      <h1>Elige un cuento</h1>

      <ul className={styles.list}>
        {CUENTOS.map((cuento) => (
          <li key={cuento.id}>
            <button className={styles.cuentoButton} onClick={() => onSelect(cuento)}>
              {cuento.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { SelectCuentoScene };