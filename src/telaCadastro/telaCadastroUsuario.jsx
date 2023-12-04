import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import Usuario from "./formularios/usuario";

export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [usuario, setUsuario] = useState({
        nickname: '',
        urlAvatar: ''
    });
    return (
        <Container>
            <Pagina>
                {
                    <Usuario exibirFormulario={setExibirFormulario}
                        categoriaParaEdicao={categoriaParaEdicao}
                        setCategoriaParaEdicao={setCategoriaParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                    />
                }
            </Pagina>
        </Container>
    )
}