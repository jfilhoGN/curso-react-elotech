import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Usuario from './Usuario';
import Configuracao from './Configuracao'
import { Switch, Route, withRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logado: false
    }
  }

  onLogin = () => {
    this.setState({ logado: true });
  }

  onLogout = () => {
    this.setState({ logado: false });
    this.props.history.push('/')
  }

  render() {
    const { logado } = this.state;
    return (
      <div>
        <Header logado={logado} onLogin={this.onLogin} onLogout={this.onLogout} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/configuracao' component={Configuracao} />
          <Route exact path='/meuperfil' component={Usuario} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
