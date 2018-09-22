import React from 'react';
import Card from 'react-materialize/lib/Card';
import { Image } from 'react-bootstrap';
import ListaPost from './ListaPost';

class Usuario extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Image src="/thumbnail.png" rounded />
                    <p>Nome</p>
                    <p>Usuario</p>
                </Card>
                <Card>
                    <ListaPost>

                    </ListaPost>
                </Card>
            </div>
        )
    }
}

export default Usuario;