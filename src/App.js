import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioProduto from './componentes/FormularioProduto'
import TabelaProduto from './componentes/TabelaProduto'
import BarraNavegacao from './componentes/BarraNavegacao'

class App extends Component {

  render() {
    return (
      <div className="content">

        <BarraNavegacao></BarraNavegacao>

        <h1>Cadastro de Produtos</h1>

        <FormularioProduto></FormularioProduto>
        <TabelaProduto></TabelaProduto>
      </div>
    );
  }
}

export default App;
