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
                <div className="list-group">
                    <button className="list-group-item list-group-item-action btn btn-link">Pet 1</button>
                    <button className="list-group-item list-group-item-action btn btn-link">Pet 2</button>
                    <button className="list-group-item list-group-item-action btn btn-link">Pet 3</button>
                    <button className="list-group-item list-group-item-action btn btn-link" style={{ backgroundColor: tema }}>Pet 4</button>
                    <button className="list-group-item list-group-item-action btn btn-link">Pet 5</button>
                    <button className="list-group-item list-group-item-action btn btn-link">Pet 6</button>
                </div>
            </div>
        )
    }
}
