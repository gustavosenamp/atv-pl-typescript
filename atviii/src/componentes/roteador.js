import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPet from "./listaPet";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaProduto from "./listaProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServico from "./listaServico";
import FormularioCadastroServico from "./formularioCadastroServico";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');
    const selecionarView = (valor, e) => {
        e.preventDefault();
        setTela(valor);
    };

    const construirView = () => {
        switch(tela) {
            case 'Clientes':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <ListaCliente tema="#e3f2fd" />
                    </>
                );
            case 'Cadastrar Clientes':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <FormularioCadastroCliente tema="#e3f2fd" />
                    </>
                );
            case 'Pets':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <ListaPet tema="#e3f2fd" />
                    </>
                );
            case 'Cadastrar Pets':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <FormularioCadastroPet tema="#e3f2fd" />
                    </>
                );
            case 'Produtos':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <ListaProduto tema="#e3f2fd" />
                    </>
                );
            case 'Cadastrar Produtos':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <FormularioCadastroProduto tema="#e3f2fd" />
                    </>
                );
            case 'Serviços':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <ListaServico tema="#e3f2fd" />
                    </>
                );
            case 'Cadastrar Serviços':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastrar Clientes', 'Pets', 'Cadastrar Pets', 'Produtos', 'Cadastrar Produtos', 'Serviços', 'Cadastrar Serviços']} />
                        <FormularioCadastroServico tema="#e3f2fd" />
                    </>
                );
            default:
                return null;
        }
    };

    return construirView();
}
