export default function ListaPet(props) {
    let tema = props.tema;
    return (
        <div className="container-fluid">
            <div className="list-group">
                <button className="list-group-item list-group-item-action btn btn-link">Pet 1</button>
                <button className="list-group-item list-group-item-action btn btn-link">Pet 2</button>
                <button className="list-group-item list-group-item-action btn btn-link">Pet 3</button>
                <button className="list-group-item list-group-item-action btn btn-link" style={{ backgroundColor: tema }}>Pet 4</button>
                <button className="list-group-item list-group-item-action btn btn-link">Pet 5</button>
                <button className="list-group-item list-group-item-action btn btn-link">Pet 6</button>
            </div>
        </div>
    );
}
