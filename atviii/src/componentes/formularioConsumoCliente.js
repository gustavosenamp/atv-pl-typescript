import React from "react";

const FormularioConsumoCliente = ({ tema }) => {
  return (
    <div className="container-fluid">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome do Produto"
            aria-label="Nome do Produto"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Quantidade"
            aria-label="Quantidade"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{ background: tema }}
          >
            Consumir
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioConsumoCliente;
