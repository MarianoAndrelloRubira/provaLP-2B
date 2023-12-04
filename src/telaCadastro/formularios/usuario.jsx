import { useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Form, Row, Col, Button, FloatingLabel,Table,Image} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ESTADO from '../../recursos/estado';
import { adicionarUsuario } from '../../redux/usuarioReducer';

export default function Usuario(props) {

    const usuarioVazio = {
        nickname: '',
        urlAvatar: '',

    }
    const estadoInicial = props.usuario;
    const [usuario, setUsuario] = useState(estadoInicial);
    const { estado, mensagem, usuarios } = useSelector((state) => state.uusario);
    const dispatch = useDispatch();

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setUsuario({ ...usuario, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            dispatch(adicionarUsuario(usuario));
            
            setUsuario(usuarioVazio);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    if (estado === ESTADO.ERRO) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagem}</p>

            </div>
            , { toastId: estado });
    }
    else {
        toast.dismiss();
        return (
            
            <Container>
                <h2>Cadastro de Usuario</h2>
                <Form noValidate onSubmit={manipularSubmissao}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Apelido:"
                                    className="mb-3"
                                >

                                    <Form.Control
                                        type="text"
                                        placeholder="LocoAbrel"
                                        id="apelido"
                                        name="apelido"
                                        value={usuario.nickname}
                                        onChange={manipularMudancas}
                                        disabled />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o apelido do usuario!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="Imagem(url):"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Insira a url de uma imagem"
                                        id="imagem"
                                        name="imagem"
                                        value={usuario.urlAvatar}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe uma url de imagem!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} offset={5}>
                            <Button type="submit" variant={"primary"}>Cadastrar</Button>
                        </Col>
                        <Col md={6} offset={5}>
                            <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                            }>Voltar</Button>
                        </Col>
                    </Row>
                    <Container>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Apelido</th>
                            <th>Imagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario) => {
                                return (<tr key={usuario.id}>
                                    <td>{usuario.nickname}</td>
                                    <td>
                                    <Image src={usuario.urlAvatar} thumbnail /></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
                    </Container>
                </Form>
            </Container>
        );
    }
}