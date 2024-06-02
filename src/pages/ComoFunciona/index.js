import React from 'react';
import '../../assets/css/style_simples.css';
import { Link } from 'react-router-dom';

const ComoFunciona = () => {
  return (
    <main class="bd_sim">

      <article className="texto-principal_sim">
        <h2>Campo Real Eventos é um projeto desenvolvido como parte do Desafio Integrador no ano de 2023 para suprir uma demanda do departamento de TI na criação e realização dos eventos institucionais e acadêmicos no Centro Universitário Campo Real.</h2>

        <div className="botao-voltar_sim">
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default ComoFunciona;
