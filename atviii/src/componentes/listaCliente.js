export default function ListaCliente(props) {
    let tema = props.tema;
    return (
        <div className="container-fluid">
            <div className="list-group">
                <button className="list-group-item list-group-item-action btn btn-link">Cliente 1</button>
                <button className="list-group-item list-group-item-action btn btn-link">Cliente 2</button>
                <button className="list-group-item list-group-item-action btn btn-link">Cliente 3</button>
                <button className="list-group-item list-group-item-action btn btn-link" style={{ backgroundColor: tema }}>Cliente 4</button>
                <button className="list-group-item list-group-item-action btn btn-link">Cliente 5</button>
                <button className="list-group-item list-group-item-action btn btn-link">Cliente 6</button>
            </div>
        </div>
    );
}
