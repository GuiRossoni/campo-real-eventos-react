import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/style_form.css';

const Contato = () => {
  //hook useState, usado para gerenciar o estado dos campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [ra, setRA] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [notificationVisible] = useState(false);

  //hook useNavigate, usado para redirecionar o usuário para a página inicial após o envio do formulário
  const navigate = useNavigate();

  const isFormValid = () => {
    return nome.trim() !== '' && email.trim() !== '' && ra.trim() !== '' && mensagem.trim() !== '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      alert('Formulário enviado!');
      navigate('/');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <main className='bd_form'>
      <article className="interface_form">
        <form onSubmit={handleSubmit}>
          <h1>Contatos:</h1>
          <h2>eventos@camporeal.edu.br <br /> (42)36215200</h2>
          <h2>Ou nos deixe uma mensagem:</h2>
          <div className="input-box_form">
            <label htmlFor="inome">Nome:</label>
            <input type="text" placeholder="Nome Completo:" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="input-box_form">
            <label htmlFor="iemail">E-mail:</label>
            <input type="email" placeholder="e-mail:" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-box_form">
            <label htmlFor="ira">R.A:</label>
            <input type="number" name="ra" id="ira" placeholder="R.A:" value={ra} onChange={(e) => setRA(e.target.value)} required />
          </div>
          <div className="input-box_form">
            <label htmlFor="imensagem">Em que podemos ajudar?</label>
            <textarea name="mensagem" id="imensagem" cols="50" rows="4" placeholder="Em que podemos ajudar?" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
          </div>
          <div className="botoes_form">
            <button type="reset" className="botao_form">Cancelar</button>
            <button type="submit" className="botao_form">Enviar</button>
          </div>
          <div className="botao-voltar_form">
            <Link to="/">
              <button>Voltar</button>
            </Link>
          </div>
        </form>
      </article>
      {notificationVisible && (
        <div className="notification">
          <p>Mensagem enviada com sucesso!</p>
        </div>
      )}
    </main>
  );
};

export default Contato;
