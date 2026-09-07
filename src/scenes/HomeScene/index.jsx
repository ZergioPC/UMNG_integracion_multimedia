import styles from "./HomeScene.module.css";

function HomeScene({ onStart }) {
  return (
    <section className={styles.HomeScene}>
      <h1>Proyecto de Integración Multimedia</h1>
      <button className={styles.startButton} onClick={onStart}>
        Seleccionar cuento
      </button>
    </section>
  );
}

export { HomeScene };