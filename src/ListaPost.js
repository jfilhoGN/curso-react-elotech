import React from 'react';
import { Col, Collection, CollectionItem } from 'react-materialize';

class ListaPost extends React.Component {


    renderPost = (post) => {
        return (
            <CollectionItem key={post.id} className="collection-item" >
                <p>Nome: </p>
                <p>Usuario: </p>
                <p>post</p>
            </CollectionItem>
        )
    }

    // {this.state.posts.map(this.renderPost)}
    render() {
        return (
            <div>
                <h3><center>Posts</center></h3>
                <Col m={3} s={3}>
                    <Collection className="collection">

                    </Collection>
                </Col>
            </div>

        )
    }

}

export default ListaPost;