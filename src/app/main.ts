import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import DeleteCliente from "../negocio/deleteCliente";
import DeletePet from "../negocio/deletePet";
import DeleteProduto from "../negocio/deleteProduto";
import DeleteServico from "../negocio/deleteServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Deletar Cliente`);
    console.log(`4 - Cadastrar pet`);
    console.log(`5 - Listar todos os pets`);
    console.log(`6 - Deletar pet`);
    console.log(`7 - Cadastrar produto`);
    console.log(`8 - Listar todos os produtos`)
    console.log(`9 - Deletar produto`)
    console.log(`10 - Cadastrar serviço`);
    console.log(`11 - Listar todos os serviços`)
    console.log(`12 - Deletar servico`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemCliente = new ListagemClientes(empresa.getClientes, empresa.getPets)
            listagemCliente.listar()
            break;
        case 3:
            let deleteCliente = new DeleteCliente(empresa.getClientes, empresa.getPets)
            deleteCliente.deletar()
            break;
        case 4:
            let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
            cadastroPet.cadastrar()
            break;
        case 5:
            let listagemPets = new ListagemPets(empresa.getPets)
            listagemPets.listar()
            break;
        case 6:
            let deletePet = new DeletePet(empresa.getPets)
            deletePet.deletar()
            break;
        case 7:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 8:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 9:
            let deleteProduto = new DeleteProduto(empresa.getProdutos)
            deleteProduto.deletar()
            break;
        case 10:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 11:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 12:
            let deleteServico = new DeleteServico(empresa.getServicos)
            deleteServico.deletar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}