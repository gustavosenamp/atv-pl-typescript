import { Component } from "react";

type props = {
    tema: string
}

export default class ListaPet extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h3 style={{ color: tema }}>Lista de Pets</h3>
                {/* Adicione aqui a lógica para listar os pets */}
            </div>
        )
    }
}