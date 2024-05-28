import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemConsumo extends Listagem {
    private clientes: Array<Cliente>;
    private pets: Array<Pet>;

    constructor(clientes: Array<Cliente>, pets: Array<Pet>){
        super();
        this.clientes = clientes;
        this.pets = pets;
    }

    public listar(): void {
        console.log(`\nLista de produtos e serviços consumidos por cada cliente:`);
        this.clientes.forEach(cliente => {
            console.log(`\nCliente: ${cliente.nome}`);
            const produtosConsumidos = cliente.getProdutosConsumidos;
            const servicosConsumidos = cliente.getServicosConsumidos;

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
            console.log(`--------------------------------------`);
        });
    }
}
