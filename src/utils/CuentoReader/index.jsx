import styles from "./CuentoReader.module.css";

function CuentoReader({ cuento, region }) {
  return (
    <article className={styles.CuentoReader}>
      <h2>{cuento.title}</h2>

      <ul className={styles.frases}>
        {cuento.frases.map((frase) => (
          <li key={frase.id}>
            <p>{frase.content[region]}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export { CuentoReader };