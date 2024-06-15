import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import ListaCompra from "./listaConsumo";
import FormularioCadastroClienteEPet from "./formularioCadastroClienteEPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroConsumo from "./formularioCadastroConsumo";
//import Analises from "./analises";
import ListaPet from "./listaPets";

type Tela =
  | "Clientes"
  | "Pets"
  | "Produtos"
  | "Serviços"
  | "Compras"
  | "Cadastrar Cliente/Pet"
  | "Cadastrar Produto"
  | "Cadastrar Serviço"
  | "Comprar"
  | "Análises";

export default function Roteador() {
  const [tela, setTela] = useState<Tela>("Clientes");

  const selecionarView = (
    valor: Tela,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setTela(valor);
  };

  const construirView = () => {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={selecionarView}
        tema="#e3f2fd"
        botoes={[
          "Clientes",
          "Pets",
          "Produtos",
          "Serviços",
          "Compras",
          "Cadastrar Cliente/Pet",
          "Cadastrar Produto",
          "Cadastrar Serviço",
          "Comprar",
          "Análises",
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
      case "Pets":
        return (
          <>
            {barraNavegacao}
            <ListaPet tema="#e3f2fd" />
          </>
        );
      case "Produtos":
        return (
          <>
            {barraNavegacao}
            <ListaProduto tema="#e3f2fd" />
          </>
        );
      case "Serviços":
        return (
          <>
            {barraNavegacao}
            <ListaServico tema="#e3f2fd" />
          </>
        );
      case "Compras":
        return (
          <>
            {barraNavegacao}
            <ListaCompra tema="#e3f2fd" />
          </>
        );
      case "Cadastrar Cliente/Pet":
        return (
          <>
            {barraNavegacao}
            <FormularioCadastroClienteEPet tema="#e3f2fd" />
          </>
        );
      case "Cadastrar Produto":
        return (
          <>
            {barraNavegacao}
            <FormularioCadastroProduto tema="#e3f2fd" />
          </>
        );
      case "Cadastrar Serviço":
        return (
          <>
            {barraNavegacao}
            <FormularioCadastroServico tema="#e3f2fd" />
          </>
        );
      case "Comprar":
        return (
          <>
            {barraNavegacao}
            <FormularioCadastroConsumo tema="#e3f2fd" />
          </>
        );
      case "Análises":
        return (
          <>
            {barraNavegacao}
            <Analises tema="#e3f2fd" />
          </>
        );
      default:
        return null;
    }
  };

  return construirView();
}
