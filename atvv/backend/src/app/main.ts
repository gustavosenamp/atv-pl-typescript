import Entrada from "../io/entrada";
import Cliente from "../models/cliente";
import CPF from "../models/cpf";
import Empresa from "../models/empresa";
import Pet from "../models/pet";
import Produto from "../models/produto";
import Servico from "../models/servico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroConsumo from "../negocio/cadastroConsumo";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import DeleteCliente from "../negocio/deleteCliente";
import DeletePet from "../negocio/deletePet";
import DeleteProduto from "../negocio/deleteProduto";
import DeleteServico from "../negocio/deleteServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemConsumoPorRaca from "../negocio/listagemConsumoPorPet";
import ListagemConsumoTop5PorValor from "../negocio/listagemConsumoTop5PorValor";
import ListagemPets from "../negocio/listagemPets";
import ListagemConsumo from "../negocio/listagemProdEServConsumidos";
import ListagemProdEServConsumidos from "../negocio/listagemProdEServConsumidos";
import ListagemProdEServMaisConsumidos from "../negocio/listagemProdEServMaisConsumidos";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemConsumoTop10 from "../negocio/listagemTop10";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()

let cli1 = new Cliente('Natalia Gomes', 'Nat G', new CPF('45454545454',new Date(25,11,1975)))
let cli2 = new Cliente('Ana Santos', 'Ana S', new CPF('89421565454',new Date(15,3,1985)))
let cli3 = new Cliente('Luiz Couto', 'Luiz C', new CPF('49478542453',new Date(18,7,1988)))
let cli4 = new Cliente('Isabela Santos', 'Isa S', new CPF('73454542354',new Date(24,8,1982)))
let cli5 = new Cliente('João Silva', 'João S', new CPF('28426645454',new Date(3,2,1968)))
let cli6 = new Cliente('Pietra Almeida', 'Pietra A', new CPF('39454475554',new Date(8,12,1990)))
let cli7 = new Cliente('Heloisa Cabral', 'Heloisa C', new CPF('14454877456',new Date(27,7,1986)))
let cli8 = new Cliente('Luiza Ferreira', 'Luiza F', new CPF('52452245451',new Date(30,1,1992)))
let cli9 = new Cliente('Iago Chaves', 'Iago C', new CPF('11454445458',new Date(14,8,1955)))
let cli10 = new Cliente('Noemia Carvalho', 'Noemia C', new CPF('31454745895',new Date(7,5,1981)))
let cli11 = new Cliente('Dalva Veloso', 'Dalva V', new CPF('56554745895',new Date(29,6,1992)))

empresa.getClientes.push(cli1)
empresa.getClientes.push(cli2)
empresa.getClientes.push(cli3)
empresa.getClientes.push(cli4)
empresa.getClientes.push(cli5)
empresa.getClientes.push(cli6)
empresa.getClientes.push(cli7)
empresa.getClientes.push(cli8)
empresa.getClientes.push(cli9)
empresa.getClientes.push(cli10)
empresa.getClientes.push(cli11)

// Criação de pets
let pet1 = new Pet('Rex', cli1.getNome, 'Golden Retriever', 'Macho', 'Cachorro');
let pet2 = new Pet('Mia', cli2.getNome, 'Siamês', 'Fêmea', 'Gato');
let pet3 = new Pet('Buddy', cli3.getNome, 'Beagle', 'Macho', 'Cachorro');
let pet4 = new Pet('Luna', cli4.getNome, 'Labrador', 'Fêmea', 'Cachorro');
let pet5 = new Pet('Bella', cli5.getNome, 'Persa', 'Fêmea', 'Gato');
let pet6 = new Pet('Charlie', cli6.getNome, 'Poodle', 'Macho', 'Cachorro');
let pet7 = new Pet('Max', cli7.getNome, 'Bulldog', 'Macho', 'Cachorro');
let pet8 = new Pet('Lucy', cli8.getNome, 'Bengal', 'Fêmea', 'Gato');
let pet9 = new Pet('Daisy', cli9.getNome, 'Shih Tzu', 'Fêmea', 'Cachorro');
let pet10 = new Pet('Lily', cli10.getNome, 'Maine Coon', 'Fêmea', 'Gato');
let pet11 = new Pet('Milo', cli11.getNome, 'Dachshund', 'Macho', 'Cachorro');

cli1.addPet(pet1);
cli2.addPet(pet2);
cli3.addPet(pet3);
cli4.addPet(pet4);
cli5.addPet(pet5);
cli6.addPet(pet6);
cli7.addPet(pet7);
cli8.addPet(pet8);
cli9.addPet(pet9);
cli10.addPet(pet10);
cli11.addPet(pet11);


empresa.getPets.push(pet1);
empresa.getPets.push(pet2);
empresa.getPets.push(pet3);
empresa.getPets.push(pet4);
empresa.getPets.push(pet5);
empresa.getPets.push(pet6);
empresa.getPets.push(pet7);
empresa.getPets.push(pet8);
empresa.getPets.push(pet9);
empresa.getPets.push(pet10);
empresa.getPets.push(pet11);

let servico1 = new Servico("Banho com Shampoo de Acido Hialuronico", 32);
let servico2 = new Servico("Banho com Mascara de Retinol", 45);
let servico3 = new Servico("Tratamento de Pele: Extracao de Pulgas", 75);
let servico4 = new Servico("Corte de Pelos e Design de Sobrancelha", 45);
let servico5 = new Servico("Banho de Hidrataçao com Acido Hialuronico", 68);
let servico6 = new Servico("Pedicure e Manicure Canina", 40);

empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)
empresa.getServicos.push(servico5)
empresa.getServicos.push(servico6)

let produto1 = new Produto("Shampoo para Pelos Sensiveis", 12);
let produto2 = new Produto("Condicionador para Pelos Longos", 20);
let produto3 = new Produto("Kit Shampoo e Condicionador para Pelos Brilhantes", 30);
let produto4 = new Produto("Sabonete Esfoliante para Pele de Cachorro", 8);
let produto5 = new Produto("Oleo Corporal para Pelagem Sedosa", 18);
let produto6 = new Produto("Mascara Facial Relaxante para Pets", 25);

empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)
empresa.getProdutos.push(produto5)
empresa.getProdutos.push(produto6)

cli1.addProduto(produto1)
cli2.addProduto(produto2)
cli3.addProduto(produto3)
cli4.addProduto(produto4)
cli5.addProduto(produto5)
cli6.addProduto(produto6)
cli7.addProduto(produto3)
cli8.addProduto(produto6)
cli9.addProduto(produto1)
cli9.addProduto(produto3)
cli11.addProduto(produto2)

cli1.addServico(servico1)
cli2.addServico(servico2)
cli3.addServico(servico6)
cli4.addServico(servico2)
cli5.addServico(servico5)
cli6.addServico(servico3)
cli7.addServico(servico4)
cli8.addServico(servico5)
cli9.addServico(servico1)
cli11.addServico(servico1)
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
    console.log(`13 - Cadastrar Consumo`)
    console.log(`14 - Listar consumo`)
    console.log(`15 - Listar Top 10 de Clientes que mais consumiram (em quantidade)`)
    console.log(`16 - Listar Produtos e Serviços mais consumidos`)
    console.log(`17 - Listar produtos e serviços mais consumidos por tipo de raça de pet`);
    console.log(`18 - Listar Top 5 Clintes que mais consumiram (por valor)`);

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
        case 13:
            let cadastroConsumo = new CadastroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            cadastroConsumo.cadastrar()
        case 14:
            let listagemConsumo = new ListagemConsumo(empresa.getClientes, empresa.getPets)
            listagemConsumo.listar()
            break;
        case 15:
            let listagemTop10 = new ListagemConsumoTop10(empresa.getClientes, empresa.getPets)
            listagemTop10.listar()
            break;
        case 16:
            let listagemMaisConsumidos = new ListagemProdEServMaisConsumidos(empresa.getClientes)
            listagemMaisConsumidos.listar()
            break;
        case 17:
            let listagemConsumoPorRaca = new ListagemConsumoPorRaca(empresa.getClientes)
            listagemConsumoPorRaca.listar()
            break;
        case 18:
            let listagemConsumoTop5PorValor = new ListagemConsumoTop5PorValor(empresa.getClientes)
            listagemConsumoTop5PorValor.listar()
            break;      
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}