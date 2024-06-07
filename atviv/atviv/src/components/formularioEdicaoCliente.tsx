import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Telefone = {
  ddd: string;
  numero: string;
};

type Endereco = {
  codigoPostal: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  informacoesAdicionais?: string;
};

type Cliente = {
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: Endereco;
  telefones: Telefone[];
};

export default function FormularioEdicaoCliente(props: any): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [cliente, setCliente] = useState<Cliente>(location.state as Cliente);

  if (!location.state) {
    navigate("/");
    return <></>;
  }

  function adicionarTelefone() {
    const telefones = [...cliente.telefones, { ddd: '', numero: '' }];
    setCliente({ ...cliente, telefones });
  }

  function removerTelefone(index: number) {
    const telefones = [...cliente.telefones];
    telefones.splice(index, 1);
    setCliente({ ...cliente, telefones });
  }

  function validarEdicao(): boolean {
    if (
      cliente.nome.trim().length === 0 ||
      cliente.nomeSocial.trim().length === 0 ||
      cliente.email.trim().length === 0 ||
      cliente.endereco.codigoPostal.trim().length === 0 ||
      cliente.endereco.rua.trim().length === 0 ||
      cliente.endereco.numero.trim().length === 0 ||
      cliente.endereco.bairro.trim().length === 0 ||
      cliente.endereco.cidade.trim().length === 0 ||
      cliente.endereco.estado.trim().length === 0 ||
      cliente.telefones.length === 0
    ) {
      return false;
    }

    for (const telefone of cliente.telefones) {
      if (telefone.ddd.trim().length === 0 || telefone.numero.trim().length === 0) {
        return false;
      }
    }

    return true;
  }

  function salvar() {
    const isValid = validarEdicao();
    if (!isValid) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    fetch("http://localhost:32831/cliente/atualizar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    }).then((r) => {
      alert(r.status === 200 ? "Cliente atualizado com sucesso!" : "Erro ao atualizar cliente.");
      navigate("/");
    });
  }

  return (
    <div className="container-fluid">
      <h4>Informações do cliente:</h4>
      <div className="input-group mb-3">
        <input
          value={cliente.nome}
          onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
          type="text"
          className="form-control"
          placeholder="Nome *"
          aria-label="Nome"
          aria-describedby="basic-addon1"
        />
      </div>
      {/* Adicione os outros campos de entrada aqui... */}
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" onClick={salvar} style={{ background: "#e3f2fd" }}>Atualizar</button>
      </div>
    </div>
  );
}
