import React from "react";

type Props = {
  tema: string;
};

const FormularioConsumoCliente: React.FC<Props> = ({ tema }) => {
  return (
    <div className="container-fluid">
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cliente"
            aria-label="Cliente"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Produto"
            aria-label="Produto"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Quantidade"
            aria-label="Quantidade"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
            Adicionar Consumo
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioConsumoCliente;
