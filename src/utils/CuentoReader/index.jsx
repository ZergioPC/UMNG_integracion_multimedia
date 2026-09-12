function CuentoReader({ cuento, region }) {
  return (
    <article
      className="w-100 p-4 rounded-4 bg-white bg-opacity-10"
      style={{ maxWidth: 720 }}
    >
      <h2 className="text-center mb-4">{cuento.title}</h2>

      <ul className="list-unstyled d-flex flex-column gap-3 m-0">
        {cuento.frases.map((frase) => (
          <li key={frase.id}>
            <p className="lh-base m-0">{frase.content[region]}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export { CuentoReader };