import { Component } from "react";

type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h3 style={{ color: tema }}>Lista de Serviços</h3>
                {/* Adicione aqui a lógica para listar os serviços */}
            </div>
        )
    }
}
