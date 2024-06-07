import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";


type State = {
  tela: string;
};

export default class Roteador extends Component<{}, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Clientes",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: Event) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      tela: novaTela,
    });
  }

  render() {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="#e3f2fd"
        botoes={[
          "Clientes",
          "Cadastros Clientes",
          "Consumos",
          "Cadastros Consumos",
          "Pets",
          "Cadastros Pets",
          "Produtos",
          "Cadastros Produtos",
          "Serviços",
          "Cadastros Serviços",
          "Consumos",
          "Cadastros Consumos",
        ]}
      />
    );
    switch (this.state.tela) {
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
      default:
        return (
          <>
            {barraNavegacao}
            <ListaCliente tema="#e3f2fd" />
          </>
        );
    }
  }
}
