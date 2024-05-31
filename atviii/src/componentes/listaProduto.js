export default function ListaProduto(props) {
    let tema = props.tema;
    return (
        <div className="container-fluid">
            <div className="list-group">
                <button className="list-group-item list-group-item-action btn btn-link">Produto 1</button>
                <button className="list-group-item list-group-item-action btn btn-link">Produto 2</button>
                <button className="list-group-item list-group-item-action btn btn-link">Produto 3</button>
                <button className="list-group-item list-group-item-action btn btn-link" style={{ backgroundColor: tema }}>Produto 4</button>
                <button className="list-group-item list-group-item-action btn btn-link">Produto 5</button>
                <button className="list-group-item list-group-item-action btn btn-link">Produto 6</button>
            </div>
        </div>
    );
}
