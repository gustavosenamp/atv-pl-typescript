import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemConsumoTop5PorValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        // Cria uma lista de objetos com clientes e o valor total de produtos e serviços consumidos
        const consumoClientes = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.reduce((acc, produto) => acc + produto.preco, 0);
            const totalServicos = cliente.getServicosConsumidos.reduce((acc, servico) => acc + servico.preco, 0);
            const totalConsumo = totalProdutos + totalServicos;
            return { cliente, totalConsumo };
        });

        // Ordena a lista pelo total de consumo em ordem decrescente
        consumoClientes.sort((a, b) => b.totalConsumo - a.totalConsumo);

        // Seleciona os 5 primeiros clientes
        const topClientes = consumoClientes.slice(0, 5);

        console.log(`\nTop 5 clientes que mais consumiram por valor:`);
        topClientes.forEach((item, index) => {
            console.log(`\n${index + 1}. Cliente: ${item.cliente.nome}`);
            console.log(`Total de consumo: R$ ${item.totalConsumo.toFixed(2)}`);
            console.log(`--------------------------------------`);
        });
    }
}
