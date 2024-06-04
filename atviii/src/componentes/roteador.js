import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPet from "./listaPet";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServico from "./listaServico";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioConsumoCliente from "./formularioConsumoCliente";
import ListaConsumoCliente from "./listaConsumoCliente";

const Roteador = () => {
  const [tela, setTela] = useState("Clientes");

  const selecionarView = (novaTela) => {
    console.log(novaTela);
    setTela(novaTela);
  };

  let barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="#e3f2fd"
      botoes={[
        "Clientes",
        "Cadastros Clientes",
        "Pets",
        "Cadastros Pets",
        "Produtos",
        "Cadastros Produtos",
        "Serviços",
        "Cadastros Serviços",
        "Consumos",
        "Cadastro Consumo",
      ]}
    />
  );

  switch (tela) {
    case "Clientes":
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="#e3f2fd" />
        </>
      );
    case "Cadastros Clientes":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroCliente tema="#e3f2fd" />
        </>
      );
    case "Pets":
      return (
        <>
          {barraNavegacao}
          <ListaPet tema="#e3f2fd" />
        </>
      );
    case "Cadastros Pets":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroPet tema="#e3f2fd" />
        </>
      );
    case "Produtos":
      return (
        <>
          {barraNavegacao}
          <ListaProduto tema="#e3f2fd" />
        </>
      );
    case "Cadastros Produtos":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroProduto tema="#e3f2fd" />
        </>
      );
    case "Serviços":
      return (
        <>
          {barraNavegacao}
          <ListaServico tema="#e3f2fd" />
        </>
      );
    case "Cadastros Serviços":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroServico tema="#e3f2fd" />
        </>
      );
    case "Consumos":
      return (
        <>
          {barraNavegacao}
          <ListaConsumoCliente tema="#e3f2fd" />
        </>
      );
    case "Cadastro Consumo":
        return (
          <>
            {barraNavegacao}
            <FormularioConsumoCliente tema="#e3f2fd" />
          </>
        );
    default:
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="#e3f2fd" />
        </>
      );
  }
};

export default Roteador;
