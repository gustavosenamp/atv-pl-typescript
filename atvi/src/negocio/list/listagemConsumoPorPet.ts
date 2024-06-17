import Cliente from "../../modelo/cliente";

class ListagemConsumoPorRaca {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar() {
        let consumoPorRaca: { [raca: string]: { produtos: { [nome: string]: number }, servicos: { [nome: string]: number } } } = {};

        // Iterar sobre os clientes e seus pets
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                if (!consumoPorRaca[pet.getRaca]) {
                    consumoPorRaca[pet.getRaca] = { produtos: {}, servicos: {} };
                }

                // Contar produtos consumidos
                cliente.getProdutosConsumidos.forEach(produto => {
                    if (!consumoPorRaca[pet.getRaca].produtos[produto.nome]) {
                        consumoPorRaca[pet.getRaca].produtos[produto.nome] = 0;
                    }
                    consumoPorRaca[pet.getRaca].produtos[produto.nome]++;
                });

                // Contar serviços consumidos
                cliente.getServicosConsumidos.forEach(servico => {
                    if (!consumoPorRaca[pet.getRaca].servicos[servico.nome]) {
                        consumoPorRaca[pet.getRaca].servicos[servico.nome] = 0;
                    }
                    consumoPorRaca[pet.getRaca].servicos[servico.nome]++;
                });
            });
        });

        // Exibir resultados
        console.log("Consumo por raça:");
        console.log("");
        for (let raca in consumoPorRaca) {
            console.log(`Raça: ${raca}`);
            console.log("Produtos:");
            for (let produto in consumoPorRaca[raca].produtos) {
                console.log(`    ${produto}: ${consumoPorRaca[raca].produtos[produto]}`);
            }
            console.log("Serviços:");
            for (let servico in consumoPorRaca[raca].servicos) {
                console.log(`    ${servico}: ${consumoPorRaca[raca].servicos[servico]}`);
            }
            console.log("");
        }
    }
}

export default ListagemConsumoPorRaca;
