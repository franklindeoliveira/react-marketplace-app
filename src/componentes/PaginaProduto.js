import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioProduto from './FormularioProduto'
import TabelaProduto from './TabelaProduto'
import $ from 'jquery';

export default class PaginaProduto extends Component {

    constructor() {
        super();
        this.state = {produtos: [], lojas: []};
        this.atualizaListaProdutos = this.atualizaListaProdutos.bind(this);
    };

    render() {

      return (
        <div>

          <FormularioProduto lojas={this.state.lojas} callbackAtualizaListaProdutos={this.atualizaListaProdutos} />
          <TabelaProduto linhas={this.state.produtos} />
        
        </div>
      );
    }
  
    componentDidMount() {
        $.ajax({
            url: "http://localhost:8080/produtos",
            dataType: 'json',
            success: resposta => {
                console.log("sucesso");
                this.setState({produtos: resposta});
            },
            error: resposta => {
                console.log("erro");
                console.log(resposta);
            }
        });
    }
  
    atualizaListaProdutos(novoProduto) {
      this.setState({produtos: this.state.produtos.concat(novoProduto)});
    } 
    
}