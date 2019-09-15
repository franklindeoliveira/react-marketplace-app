import React, { Component } from 'react';

export default class TabelaProduto extends Component {

    render() {
        
        return (
            <div>  
                <h1>Lista de Produtos</h1>
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
                        this.props.linhas.map(linha => {
                            return (
                                <tr>
                                    <td>{linha.nome}</td>
                                    <td>{linha.descricao}</td>
                                    <td>{linha.valor}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}