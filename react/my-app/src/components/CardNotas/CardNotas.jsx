import React, { Component } from 'react';
import "./estilo.css"

class CardNotas extends Component {
  render() { 
    return (
      <section className="card-notas">
        <header className="card-notas_cabecalho">
          <h3 className="card-notas_titulo">Título</h3>
        </header>
        <p className="card-nota_texto">Escreva sua nota</p>
      </section>
    );
  }
}
 
export default CardNotas;





