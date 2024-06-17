import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function FormularioCadastroClienteEPet(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <h4>Informações do cliente:</h4>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome" 
                        aria-label="Nome" 
                        aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome social" 
                        aria-label="Nome social" 
                        aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="CPF" 
                        aria-label="CPF" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="RG" aria-label="RG" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Telefone" 
                        aria-label="Telefone" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        style={{ background: tema }}>Cadastrar Cliente</button>
                </div>

                <h4>Pets:</h4>
                <div className="input-group mb-3">
                    <input type="text" 
                    className="form-control" 
                    placeholder="CPF do dono" 
                    aria-label="CPF do dono" 
                    aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome do PET" 
                        aria-label="Nome do PET" 
                        aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Tipo" 
                    aria-label="Tipo" 
                    aria-describedby="basic-addon1"
                />
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Raça" 
                        aria-label="Raça" 
                        aria-describedby="basic-addon1"
                    />

                </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Gênero" 
                        aria-label="Gênero" 
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        style={{ background: tema }}>Cadastrar Pet</button>
                </div>
            </form>
        </div>
    )
}