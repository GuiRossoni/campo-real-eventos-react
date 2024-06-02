import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style_form.css';

const Acesso = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div>
      <main className='bd_form'>
        <article className="interface_form">
          <form onSubmit={handleSubmit}>
            
            <h1>Login</h1>
            <div className="input-box_form">
              <label htmlFor="iemail">E-mail:</label>
              <input type="email" placeholder="e-mail:" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="input-box_form">
              <label htmlFor="isenha">Senha:</label>
              <input type="password" name="senha" id="isenha" placeholder="Senha:" value={senha} onChange={handleSenhaChange} required />
            </div>
            <div className="botoes_form">
              <button type="submit" className="botao_form">Login</button>
            </div>
            <div className="cadastro_form">
              <p><Link to="/cadastro">Deseja se cadastrar?</Link></p>
            </div>
            <div className="botao-voltar_form">
              <Link to="/">
                <button>Voltar</button>
              </Link>
            </div>
          </form>
        </article>
      </main>
    </div>
  );
};

export default Acesso;
