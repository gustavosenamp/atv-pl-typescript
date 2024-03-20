import CPF from "./cpf"

export default class Pet {
    public nome: string
    public dono: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, dono: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.dono = dono
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getNome(){return this.nome}
    public get getDono(){return this.dono}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
}