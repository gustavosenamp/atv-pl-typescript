import React from "react";

type Props = {
  tema: string;
};

const ListaConsumoCliente: React.FC<Props> = ({ tema }) => {
  return (
    <div className="container-fluid">
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          Consumo 1
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Consumo 2
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Consumo 3
        </a>
        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>
          Consumo 4
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Consumo 5
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Consumo 6
        </a>
      </div>
    </div>
  );
};

export default ListaConsumoCliente;
