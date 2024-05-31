export default function ListaServico(props) {
    let tema = props.tema;
    return (
        <div className="container-fluid">
            <div className="list-group">
                <button className="list-group-item list-group-item-action btn btn-link">Serviço 1</button>
                <button className="list-group-item list-group-item-action btn btn-link">Serviço 2</button>
                <button className="list-group-item list-group-item-action btn btn-link">Serviço 3</button>
                <button className="list-group-item list-group-item-action btn btn-link" style={{ backgroundColor: tema }}>Serviço 4</button>
                <button className="list-group-item list-group-item-action btn btn-link">Serviço 5</button>
                <button className="list-group-item list-group-item-action btn btn-link">Serviço 6</button>
            </div>
        </div>
    );
}
