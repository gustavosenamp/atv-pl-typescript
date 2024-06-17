import Delete from "./delete";
import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class DeleteProduto extends Delete {
    private produtos: Array<Produto>;
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada()
    }

    public deletar(): void {
        const produtoParaExcluir = this.entrada.receberTexto(`Digite o produto para ser excluido: `);

        const indexProduto = this.produtos.findIndex(produto => produto.nome === produtoParaExcluir);

        if (indexProduto !== -1) {
            this.produtos.splice(indexProduto, 1)[0];

            console.log(`Produto ${produtoParaExcluir} deletado com sucesso.`);
        } else {
            console.log(`Produto ${produtoParaExcluir} não encontrado.`);
        }
    }
}
