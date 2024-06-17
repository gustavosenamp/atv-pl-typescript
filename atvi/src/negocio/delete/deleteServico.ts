import Delete from "./delete";
import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

export default class DeleteServico extends Delete {
    private servicos: Array<Servico>;
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada()
    }

    public deletar(): void {
        const servicoParaExcluir = this.entrada.receberTexto(`Digite o serviço para ser excluido: `);

        const indexServico = this.servicos.findIndex(servico => servico.nome === servicoParaExcluir);

        if (indexServico !== -1) {
            this.servicos.splice(indexServico, 1)[0];

            console.log(`Serviço ${servicoParaExcluir} deletado com sucesso.`);
        } else {
            console.log(`Serviço ${servicoParaExcluir} não encontrado.`);
        }
    }
}
1