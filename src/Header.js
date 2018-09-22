import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

const Header = (props) => {

    const { logado, onLogin, onLogout } = props;
    return (
        <Navbar bg='primary' variant='dark'>
            <Navbar.Brand><Link to="/" > Elo Twitter</Link></Navbar.Brand>
            <Nav className='ml-auto'>
                {
                    logado ? (
                        <div>
                            <Button className="blue darken-2 btn-small btn-margin"><Link to="/configuracao" > Configurações</Link></Button>
                            <Button className="blue darken-2 btn-small btn-margin"><Link to="/meuperfil">Meu Perfil</Link></Button>
                            <Button className="blue darken-2 btn-small btn-margin" onClick={onLogout}>Logout</Button>
                        </div>
                    ) :
                        <div>
                            <Button className="blue darken-2 btn-small" onClick={onLogin}>Login</Button>
                        </div>
                }
            </Nav>
        </Navbar>
    )
}

export default Header;