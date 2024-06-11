import Delete from "./delete";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada";

export default class DeleteCliente extends Delete {
    private clientes: Array<Cliente>;
    private pets: Array<Pet>;
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super();
        this.clientes = clientes;
        this.pets = pets;
        this.entrada = new Entrada()
    }

    public deletar(): void {
        const cpfClienteParaExcluir = this.entrada.receberTexto(`Digite o cpf para ser excluido: `);

        const indexCliente = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpfClienteParaExcluir);

        if (indexCliente !== -1) {
            this.clientes.splice(indexCliente, 1)[0];

            this.pets = this.pets.filter(pet => pet.getDono !== cpfClienteParaExcluir);

            console.log(`Cliente com CPF ${cpfClienteParaExcluir} deletado com sucesso.`);
        } else {
            console.log(`Cliente com CPF ${cpfClienteParaExcluir} não encontrado.`);
        }
    }
}
