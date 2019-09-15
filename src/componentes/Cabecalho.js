import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cabecalho extends Component {

    render() {
        return(
            <header>
                <Link to="/">  Home  </Link>|
                <Link to="/produtos">  Produtos  </Link>
            </header>
        )
    }
}
