import React, { Component } from 'react';
import $ from 'jquery';

class FormProduto extends Component {

    constructor() {
        super();
        this.state = {nome: '', descricao: '', valor: ''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setDescricao = this.setDescricao.bind(this);
        this.setValor = this.setValor.bind(this);
    }

    render() {
      return (
        <div>
          <h1>Cadastro de Produtos</h1>
          <form onSubmit={this.enviaForm} method="post">
              <div className="form-group">
                <label for="nome">Nome</label>
                <input type="text" className="form-control" id="nome" value={this.state.nome} onChange={this.setNome} placeholder="Digite o nome"></input>
              </div>
              <div className="form-group">
                <label for="descricao">Descrição</label>
                <input type="text" className="form-control" id="descricao" value={this.state.descricao} onChange={this.setDescricao} placeholder="Digite a descrição"></input>
              </div>
              <div className="form-group">
                <label for="valor">Valor</label>
                <input type="text" className="form-control" id="valor" value={this.state.valor} onChange={this.setValor} placeholder="Digite o valor"></input>
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar</button>
          </form>
        </div>
      );
   }

    enviaForm(evento){
        evento.preventDefault();
        console.log("dados sendo enviados");

        $.ajax({
            url:"http://localhost:8080/produtos",
            contentType: 'application/json',
            dataType:'json',
            type:'post',
            data: JSON.stringify({nome: this.state.nome, descricao: this.state.descricao, valor: this.state.valor}),
            success: resposta => {
              console.log("formalario enviado com sucesso");
              console.log(resposta);
              this.props.callbackAtualizaListaProdutos({
                nome: this.state.nome, descricao: this.state.descricao, valor: this.state.valor})
            },
            error: resposta => {
                console.log("erro ao enviar formulario");
                console.log(resposta);
            }
        });

    }

     setNome(event) {
        this.setState({nome: event.target.value});
      }
      
      setDescricao(event) {
        this.setState({descricao: event.target.value});
      }
      
      setValor(event) {
        this.setState({valor: event.target.value});
      }
}

export default FormProduto;