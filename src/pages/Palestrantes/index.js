import React from 'react';
import '../../assets/css/style_simples.css';
import { Link } from 'react-router-dom';

const Palestrantes = () => {
  return (
    <main class='bd_sim'>

      <article className="texto-principal_sim">
        <h2>Obrigado pelo interesse em nossa instituição, pedimos que nos envie um e-mail para:</h2>
        <h2><span>eventos@camporeal.edu.br</span></h2>
        <h2>Com a proposta de apresentação e público alvo para que possamos encaixar em nossas agendas.</h2>

        <div className="botao-voltar_sim">
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default Palestrantes;
