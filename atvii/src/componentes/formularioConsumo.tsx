import React from "react";

type Props = {
  tema: string;
};

const FormularioConsumoCliente: React.FC<Props> = ({ tema }) => {
  return (
    <div className="container-fluid">
      <form>
                <h4>Informações da compra:</h4>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Código da compra" 
                        aria-label="Código da compra" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do cliente" 
                        aria-label="Nome do cliente" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="CPF do cliente" 
                        aria-label="CPF do cliente" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do produto/serviço" 
                        aria-label="Nome do produto/serviço" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Código do produto/serviço" 
                        aria-label="Código do produto/serviço" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Valor" 
                        aria-label="Valor" 
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
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tipo pet" 
                        aria-label="Tipo pet" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Raça pet" 
                        aria-label="Raça pet" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Total venda" 
                        aria-label="Total venda" 
                        aria-describedby="basic-addon1"
                        readOnly // Torna o campo somente leitura
                    />
                </div>
                <div className="input-group mb-3">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="submit" 
                        style={{ background: tema }}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
    </div>
  );
};

export default FormularioConsumoCliente;
