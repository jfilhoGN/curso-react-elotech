import React from 'react';
import { Input } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import Card from 'react-materialize/lib/Card';
import ListaPost from './ListaPost';


class Home extends React.Component {

    render() {
        return (
            <div >
                <Input type='text' > </Input>
                <Button > Postar </Button>
                <Card >
                    <ListaPost >

                    </ListaPost>
                </Card>
            </div>
        )
    }
}

export default Home;