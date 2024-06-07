import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */

type Telefone = {
  id: number;
  ddd: string;
  numero: string;
};

type Endereco = {
  rua: string;
  numero: string;
  codigoPostal: string;
  bairro: string;
  cidade: string;
  estado: string;
  informacoesAdicionais?: string;
};

type Cliente = {
  id: number;
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: Endereco;
  telefones: Telefone[];
};

export default function ListaCliente(props: any) {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (clientes.length > 0) return;
    loadClientes();
  }, [clientes.length]);

  function loadClientes() {
    // Função fetch fazendo uma solicitação HTTP GET para a URL 
    fetch('http://localhost:32831/cliente/clientes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setClientes(r);
        console.log(r);
      });
  }

  function excluirCliente(id: number) {
    fetch('http://localhost:32831/cliente/excluir', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).then((r) => {
      alert(r.status === 200 ? 'Cliente excluído com sucesso!' : 'Erro ao excluir cliente.');
      setClientes([]);
      loadClientes();
    });
  }

  function editarCliente(cliente: Cliente) {
    navigate('/Atualizar', { state: cliente });
  }

  function formatEndereco(endereco: Endereco): string {
    return `${endereco.rua} - ${endereco.numero}, ${endereco.codigoPostal}, ${endereco.bairro}, ${endereco.cidade}, ${endereco.estado}`;
  }

  function formatTelefone(telefone: Telefone): string {
    return `(${telefone.ddd}) ${telefone.numero}`;
  }

  return (
    <div className="container-fluid">
      <div className="list-group">
        {clientes && clientes.length > 0 && clientes.map((cliente) => (
          <a key={cliente.id} className="list-group-item list-group-item-action mt-2">
            <h3 className='col'>{cliente.nome} </h3>
            <p>Nome social: {cliente.nomeSocial}</p>
            <p>Email: {cliente.email}</p>
            <p>Endereço: {formatEndereco(cliente.endereco)}</p>
            {cliente.endereco.informacoesAdicionais && cliente.endereco.informacoesAdicionais.length > 0 ? `(${cliente.endereco.informacoesAdicionais})` : ''}
            {cliente.telefones && cliente.telefones.length > 0 && (
              <>
                <p>Telefone(s):</p>
                {cliente.telefones.map(t => (
                  <React.Fragment key={t.id}><p>  . {formatTelefone(t)}</p></React.Fragment>
                ))}
              </>
            )}
            <button className='col m-2 btn btn-light' onClick={() => editarCliente(cliente)}>Editar</button>
            <button className='col m-2 btn btn-light' onClick={() => excluirCliente(cliente.id)}>Excluir</button>
          </a>
        ))}
      </div>
    </div>
  );
}
