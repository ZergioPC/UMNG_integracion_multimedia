import { CUENTOS } from "../../db";

function SelectCuentoScene({ onSelect, onBack }) {
  return (
    <section className="d-flex flex-column align-items-center gap-4 min-vh-100 p-3">
      <button className="btn btn-light align-self-start" onClick={onBack}>
        Volver
      </button>

      <h1>Elige un cuento</h1>

      <ul className="list-unstyled d-flex flex-column gap-3 align-items-center m-0">
        {CUENTOS.map((cuento) => (
          <li key={cuento.id}>
            <button className="btn btn-light btn-lg" onClick={() => onSelect(cuento)}>
              {cuento.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { SelectCuentoScene };