import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';


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
  informacoesAdicionais: string;
};

type Cliente = {
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: Endereco;
  telefones: Telefone[];
};

const clienteObj: Cliente = {
  nome: '',
  nomeSocial: '',
  email: '',
  endereco: {
    codigoPostal: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    informacoesAdicionais: '',
  },
  telefones: []
};

export default function FormularioCadastroCliente(props: any) {
  const [cliente, setCliente] = useState<Cliente>(clienteObj);

  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  }

  function handleEnderecoChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      endereco: {
        ...prevCliente.endereco,
        [name]: value,
      },
    }));
  }

  function handleTelefoneChange(index: number, event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const novosTelefones = [...cliente.telefones];
    novosTelefones[index] = { ...novosTelefones[index], [name]: value };
    setCliente((prevCliente) => ({
      ...prevCliente,
      telefones: novosTelefones,
    }));
  }

  function adicionarTelefone() {
    setCliente((prevCliente) => ({
      ...prevCliente,
      telefones: [...prevCliente.telefones, { ddd: '', numero: '' }],
    }));
  }

  function validarCadastro(): boolean {
    if (!cliente.nome.trim() || !cliente.nomeSocial.trim() || !cliente.email.trim()) return false;
    const { codigoPostal, rua, numero, bairro, cidade, estado } = cliente.endereco;
    if (!codigoPostal.trim() || !rua.trim() || !numero.trim() || !bairro.trim() || !cidade.trim() || !estado.trim()) return false;
    if (cliente.telefones.length === 0) return false;

    for (const telefone of cliente.telefones) {
      if (!telefone.ddd.trim() || !telefone.numero.trim()) return false;
    }

    return true;
  }

  function salvar() {
    if (!validarCadastro()) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    fetch('http://localhost:32831/cliente/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    }).then((response) => {
      alert(response.status === 200 ? 'Cliente cadastrado com sucesso!' : 'Erro ao cadastrar cliente.');
      navigate('/');
    });
  }

  return (
    <div className="container-fluid">
      <h4>Informações do cliente:</h4>
      <div className="input-group mb-3">
        <input
          name="nome"
          value={cliente.nome}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Nome *"
          aria-label="Nome"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="nomeSocial"
          value={cliente.nomeSocial}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Nome social *"
          aria-label="Nome social"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="email"
          value={cliente.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          placeholder="E-mail *"
          aria-label="E-mail"
        />
      </div>
      <h4 className="mt-2">Endereço:</h4>
      <div className="input-group mb-3">
        <input
          name="codigoPostal"
          value={cliente.endereco.codigoPostal}
          onChange={handleEnderecoChange}
          type="text"
          className="form-control"
          placeholder="Código Postal *"
          aria-label="Código Postal"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="rua"
          value={cliente.endereco.rua}
          onChange={handleEnderecoChange}
          type="text"
          className="form-control"
          placeholder="Rua *"
          aria-label="Rua"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="numero"
          value={cliente.endereco.numero}
          onChange={handleEnderecoChange}
          type="text"
          className="form-control"
          placeholder="Número *"
          aria-label="Número"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="bairro"
          value={cliente.endereco.bairro}
          onChange={handleEnderecoChange}
          type="text"
          className="form-control"
          placeholder="Bairro *"
          aria-label="Bairro"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="cidade"
          value={cliente.endereco.cidade}
          onChange={handleEnderecoChange}
          type="text"
          className="form-control"
          placeholder="Cidade *"
          aria-label="Cidade"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="estado"
          value={cliente.endereco.estado}
          onChange={handleEnderecoChange}
          type="text"
          className="form-control"
          placeholder="Estado *"
          aria-label="Estado"
        />
      </div>
      <div className="input-group mb-3">
        <input
          name="informacoesAdicionais"
          value={cliente.endereco.informacoesAdicionais}
          onChange={handleEnderecoChange}
          type="text"
          className="form-control"
          placeholder="Informações adicionais (Opcional)"
          aria-label="Informações adicionais"
        />
      </div>
      <div className="m-4">
        {cliente.telefones.map((tel, i) => (
          <div key={i} className="input-group mb-3">
            <input
              name="ddd"
              value={tel.ddd}
              onChange={(e) => handleTelefoneChange(i, e)}
              type="text"
              className="form-control"
              placeholder="DDD *"
              aria-label="DDD"
            />
            <input
              name="numero"
              value={tel.numero}
              onChange={(e) => handleTelefoneChange(i, e)}
              type="text"
              className="form-control"
              placeholder="Telefone *"
              aria-label="Telefone"
            />
          </div>
        ))}
        <button className="btn btn-sm btn-light" onClick={adicionarTelefone}>+ Adicionar Telefone</button>
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" onClick={salvar} style={{ background: "#e3f2fd" }}>Cadastrar</button>
      </div>
    </div>
  );
}
