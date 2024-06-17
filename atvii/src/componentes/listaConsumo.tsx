import React from "react";

type Props = {
  tema: string;
};

const ListaConsumoCliente: React.FC<Props> = ({ tema }) => {
  return (
    <div className="container-fluid">
      <div className="list-group">
        <button className="list-group-item list-group-item-action">
          Consumo 1
        </button>
        <button className="list-group-item list-group-item-action">
          Consumo 2
        </button>
        <button className="list-group-item list-group-item-action">
          Consumo 3
        </button>
        <button className="list-group-item list-group-item-action">
          Consumo 4
        </button>
        <button className="list-group-item list-group-item-action">
          Consumo 5
        </button>
        <button className="list-group-item list-group-item-action">
          Consumo 6
        </button>
      </div>
    </div>
  );
};

export default ListaConsumoCliente;
