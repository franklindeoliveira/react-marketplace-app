import React, { Component } from 'react';
import $ from 'jquery';

class TabelaProduto extends Component {

    constructor() {
        super();
        this.state = {produtos: []};        
    };

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

    render() {
        
        console.log("render");
        console.log(this.state);
        return (        
            <table className="table">
                <thead>                    
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.produtos.map(produto => {
                        return (
                            <tr>
                                <td>{produto.nome}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.valor}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default TabelaProduto;