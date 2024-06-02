import React from 'react';
import '../../assets/css/style_geral.css';
import { Link } from 'react-router-dom';

const Ingressos = () => {
  return (
    <main class='bd_sim'>
      <article className="texto-principal_sim">
        <h2>Desculpe! <br /> Essa função ainda não está disponível</h2>

        <div className="botao-voltar_sim">
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default Ingressos;
