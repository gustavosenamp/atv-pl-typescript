import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class CadastroConsumo {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do consumo`);

        // Solicitar o CPF do cliente
        let cpfCliente = this.entrada.receberTexto(`Por favor informe o número do CPF do cliente: `);
        let cliente = this.buscarClientePorCPF(cpfCliente);

        if (cliente) {
            // Verificar se o produto existe
            let nomeProduto = this.entrada.receberTexto(`Por favor insira o nome do produto consumido: `);
            let produtoExistente = this.produtos.find(produto => produto.nome.toLowerCase() === nomeProduto.toLowerCase());

            if (!produtoExistente) {
                console.log(`Produto "${nomeProduto}" não encontrado.`);
                return;
            }

            // Verificar se o serviço existe
            let nomeServico = this.entrada.receberTexto(`Por favor insira o nome do serviço consumido: `);
            let servicoExistente = this.servicos.find(servico => servico.nome.toLowerCase() === nomeServico.toLowerCase());

            if (!servicoExistente) {
                console.log(`Serviço "${nomeServico}" não encontrado.`);
                return;
            }

            // Registrar o consumo para o cliente
            cliente.addProduto(produtoExistente);
            cliente.addServico(servicoExistente);

            console.log(`\nConsumo cadastrado para o cliente ${cliente.nome}\n`);
        } else {
            console.log(`Cliente com o CPF ${cpfCliente} não encontrado.`);
        }
    }

    private buscarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}
