import Delete from "./delete";
import Entrada from "../io/entrada";
import Pet from "../modelo/pet";

export default class DeletePet extends Delete {
    private pets: Array<Pet>;
    private entrada: Entrada

    constructor(pets: Array<Pet>) {
        super();
        this.pets = pets;
        this.entrada = new Entrada()
    }

    public deletar(): void {
        const petParaExcluir = this.entrada.receberTexto(`Digite o nome do pet para ser excluido: `);
        const donoParaExcluir = this.entrada.receberTexto(`Digite o cpf do dono do pet: `);

        const indexPet = this.pets.findIndex(pet => pet.nome === petParaExcluir);
        const indexDono = this.pets.findIndex(pet => pet.dono === donoParaExcluir);

        if (indexPet !== -1 && indexDono !== -1) {
            this.pets.splice(indexPet, 1)[0];

            console.log(`Pet ${petParaExcluir} deletado com sucesso.`);
        } else {
            console.log(`Pet ${petParaExcluir} não encontrado.`);
        }
    }
}