import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("clientes")
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    nome: string

    @Column('varchar')
    nomeSocial: string

    @Column('varchar')
    cpf: string

    @Column('varchar')
    rg: string

    @Column('varchar')
    telefone: string

    @Column('varchar')
    idPet: number

}

export default Cliente;