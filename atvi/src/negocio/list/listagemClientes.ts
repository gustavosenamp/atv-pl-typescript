import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    constructor(clientes: Array<Cliente>, pets: Array<Pet>){
        super()
        this.clientes = clientes
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            this.pets.forEach(pet => {
                console.log(`Pets: ` + pet.nome);
            });
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}