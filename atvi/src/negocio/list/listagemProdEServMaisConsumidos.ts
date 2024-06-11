import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemProdEServMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        // Mapas para contar o consumo de produtos e serviços
        const consumoProdutos = new Map<string, { produto: Produto, quantidade: number }>();
        const consumoServicos = new Map<string, { servico: Servico, quantidade: number }>();

        // Contabiliza o consumo de produtos e serviços por todos os clientes
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (consumoProdutos.has(produto.nome)) {
                    consumoProdutos.get(produto.nome)!.quantidade++;
                } else {
                    consumoProdutos.set(produto.nome, { produto, quantidade: 1 });
                }
            });

            cliente.getServicosConsumidos.forEach(servico => {
                if (consumoServicos.has(servico.nome)) {
                    consumoServicos.get(servico.nome)!.quantidade++;
                } else {
                    consumoServicos.set(servico.nome, { servico, quantidade: 1 });
                }
            });
        });

        // Converte mapas para arrays e ordena pelo consumo em ordem decrescente
        const produtosOrdenados = Array.from(consumoProdutos.values()).sort((a, b) => b.quantidade - a.quantidade);
        const servicosOrdenados = Array.from(consumoServicos.values()).sort((a, b) => b.quantidade - a.quantidade);

        console.log(`\nLista de produtos mais consumidos:`);
        produtosOrdenados.forEach((item, index) => {
            console.log(`${index + 1}. Produto: ${item.produto.nome} - Quantidade: ${item.quantidade}`);
        });

        console.log(""); // Adiciona uma linha em branco

        console.log(`\nLista de serviços mais consumidos:`);
        servicosOrdenados.forEach((item, index) => {
            console.log(`${index + 1}. Serviço: ${item.servico.nome} - Quantidade: ${item.quantidade}`);
        });
        console.log(""); // Adiciona uma linha em branco
    }
}
