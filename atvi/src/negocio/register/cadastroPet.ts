import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Pet from "../../modelo/pet"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets
        this.clientes = clientes;
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de pets`);
        let dono = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        const cpfExiste = this.clientes.some(cliente => cliente.getCpf.getValor === dono);
        if (cpfExiste) {    
            let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
            let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
            let genero = this.entrada.receberTexto(`Por favor informe o genêro do pet: `);
            let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);
            let pet = new Pet(nome, dono, raca, genero, tipo);
            this.pets.push(pet)
            console.log(`\nCadastro concluído :)\n`);
        } else {
            console.log(`\nCPF não encontrado na lista de clientes. Cadastro não concluído.\n`);
        }
    }
}