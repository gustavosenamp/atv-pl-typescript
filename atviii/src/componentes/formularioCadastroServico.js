export default function FormularioCadastroServico(props) {
    let tema = props.tema;
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Serviço" aria-label="Nome do Serviço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}
