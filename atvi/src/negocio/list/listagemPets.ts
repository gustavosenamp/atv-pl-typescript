import Pet from "../../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem{
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`Nome: ` + pet.nome);
            console.log(`Raça: ` + pet.getRaca)
            console.log(`Dono: ` + pet.dono)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    
}
