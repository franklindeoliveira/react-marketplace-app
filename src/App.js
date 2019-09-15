import React, {Component} from 'react';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PaginaHome from './componentes/PaginaHome';
import PaginaProduto from './componentes/PaginaProduto';

class App extends Component {

  render() {
    return (
      <div className="content">
        <Router>

          <Cabecalho />
          
          <Route exact path="/" component={PaginaHome}/>
          <Route path="/produtos" component={PaginaProduto}/>

          <Rodape />

        </Router>
      </div>
    );
  }
}

export default App;
