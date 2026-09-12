function HomeScene({ onStart }) {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center gap-4 min-vh-100 p-3 text-center">
      <h1>Proyecto de Integración Multimedia</h1>
      <button className="btn btn-light btn-lg" onClick={onStart}>
        Seleccionar cuento
      </button>
    </section>
  );
}

export { HomeScene };