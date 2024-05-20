import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemConsumoTop10 extends Listagem {
    private clientes: Array<Cliente>;
    private pets: Array<Pet>;

    constructor(clientes: Array<Cliente>, pets: Array<Pet>){
        super();
        this.clientes = clientes;
        this.pets = pets;
    }

    public listar(): void {
        // Cria uma lista de objetos com clientes e a quantidade total de produtos e serviços consumidos
        const consumoClientes = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.length;
            const totalServicos = cliente.getServicosConsumidos.length;
            const totalConsumo = totalProdutos + totalServicos;
            return { cliente, totalConsumo };
        });

        // Ordena a lista pelo total de consumo em ordem decrescente
        consumoClientes.sort((a, b) => b.totalConsumo - a.totalConsumo);

        // Seleciona os 10 primeiros clientes
        const topClientes = consumoClientes.slice(0, 10);

        console.log(`\nTop 10 clientes que mais consumiram produtos ou serviços:`);
        topClientes.forEach((item, index) => {
            console.log(`\n${index + 1}. Cliente: ${item.cliente.nome}`);
            const produtosConsumidos = item.cliente.getProdutosConsumidos;
            const servicosConsumidos = item.cliente.getServicosConsumidos;

            if (produtosConsumidos.length === 0 && servicosConsumidos.length === 0) {
                console.log("Nenhum produto ou serviço consumido.");
            } else {
                if (produtosConsumidos.length > 0) {
                    console.log("Produtos:");
                    produtosConsumidos.forEach(produto => {
                        console.log(`- ${produto.nome}`);
                    });
                }

                if (servicosConsumidos.length > 0) {
                    console.log("Serviços:");
                    servicosConsumidos.forEach(servico => {
                        console.log(`- ${servico.nome}`);
                    });
                }
            }
            console.log(`Total de consumos: ${item.totalConsumo}`);
            console.log(`--------------------------------------`);
        });
    }
}
