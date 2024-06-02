import React from 'react';
import '../../assets/css/style_form.css';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  return (
    <main class="bd_form">
      <article className="interface_form">
        <form action="" method="post">
          <h1>Cadastro</h1>
          <div className="input-box_form">
            <label htmlFor="inome">Nome:</label>
            <input type="text" placeholder="Nome Completo:" required />
          </div>
          <div className="input-box_form">
            <label htmlFor="iemail">E-mail:</label>
            <input type="email" placeholder="e-mail:" required />
          </div>
          <div className="input-box_form">
            <label htmlFor="isenha">Senha:</label>
            <input type="password" name="senha" id="isenha" placeholder="Senha:" minLength="6" maxLength="12" required />
          </div>
          <div className="input-box_form">
            <label htmlFor="isenha">Repita a senha:</label>
            <input type="password" name="senha" id="isenha" placeholder="Senha:" minLength="6" maxLength="12" required />
          </div>
          <div className="input-box_form">
            <label htmlFor="ialuno">Cargo Institucional:</label>
            <input type="text" name="aluno" id="ialuno" placeholder="Aluno:" required />
          </div>
          <div className="input-box_form">
            <label htmlFor="icpf">CPF:</label>
            <input type="number" name="cpf" id="icpf" placeholder="123.456.789-10" minLength="12" maxLength="12" required />
          </div>
          <div className="input-box_form">
            <label htmlFor="ira">R.A:</label>
            <input type="number" name="ra" id="ira" placeholder="2020123456" minLength="10" maxLength="10" required />
          </div>
          <div className="botoes_form">
            <button type="reset" className="botao_form">Cancelar</button>
            <button type="submit" className="botao_form">Cadastrar</button>
          </div>
          <div className="botao-voltar_form">
            <Link to="/">
              <button>Voltar</button>
            </Link>
          </div>
        </form>
      </article>
    </main>
  );
};

export default Cadastro;
