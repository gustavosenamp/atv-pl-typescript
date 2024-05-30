import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaPet from "./listaPets";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaProduto from "./listaProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaServico from "./listaServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros Clientes', 'Pets', 'Cadastros Pets', 'Produtos', 'Cadastros Produtos', 'Serviços', 'Cadastros Serviços']} />
        switch (this.state.tela) {
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente tema="#e3f2fd" />
                    </>
                )
            case 'Cadastros Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente tema="#e3f2fd" />
                    </>
                )
            case 'Pets':
                return (
                    <>
                        {barraNavegacao}
                        <ListaPet tema="#e3f2fd" />
                    </>
                )
            case 'Cadastros Pets':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroPet tema="#e3f2fd" />
                    </>
                )
            case 'Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <ListaProduto tema="#e3f2fd" />
                    </>
                )
            case 'Cadastros Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroProduto tema="#e3f2fd" />
                    </>
                )
            case 'Serviços':
                return (
                    <>
                        {barraNavegacao}
                        <ListaServico tema="#e3f2fd" />
                    </>
                )
            case 'Cadastros Serviços':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroServico tema="#e3f2fd" />
                    </>
                )
            default:
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente tema="#e3f2fd" />
                    </>
                )
        }
    }
}
