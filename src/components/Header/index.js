import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style_geral.css';
import logo from '../../assets/images/logo-branco.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Campo Real" className="logo" />
      <nav id="menu">
        <Link to="/palestrantes">Palestrantes</Link>
        <Link to="/Ingressos">Ingressos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <div className="botao-acesso">
        <Link to="/acesso">
          <button>Acesso</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
