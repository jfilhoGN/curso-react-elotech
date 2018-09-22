import React from 'react';
import Card from 'react-materialize/lib/Card';
import { Input, Col, Button } from 'react-materialize';

class Configuracao extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            usuario: '',
            urlFoto: ''
        }
    }

    handleNome = event => {
        this.setState({ nome: event.target.value });
    }

    handleUser = event => {
        this.setState({ usuario: event.target.value });
    }

    handleUrlFoto = event => {
        this.setState({ urlFoto: event.target.value });
    }


    render() {
        return (
            <Card>
                <form className="col s12">
                    <Input name="nome" onChange={this.handleNome} type="text" label="Nome" s={12}></Input>
                    <Input name="nomeUsuario" onChange={this.handleUser} type="text" label="Nome de Usuário" s={12}></Input>
                    <Input name="url" onChange={this.handleUrlFoto} type="text" label="Url da Foto" s={12}></Input>
                    <Col s={12} m={12}>
                        <Button onClick={this.handleClickOpen} className="blue darken-2 btn-small btn-margin" type="submit" name="action">
                            <i className="material-icons">update</i>
                        </Button>
                    </Col>
                </form>
            </Card>
        )
    }

}

export default Configuracao;
