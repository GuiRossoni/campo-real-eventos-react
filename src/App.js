import React from 'react';
import "./assets/css/style_geral.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutWithHeader from './layouts/LayoutWithHeader'
import LayoutWithoutHeader from './layouts/LayoutWithoutHeader'
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Palestrantes from './pages/Palestrantes/index';
import Acesso from './pages/Acesso/index';
import Ingressos from './pages/Ingressos/index';
import Contato from './pages/Contato/index';
import MaisBlog from './pages/MaisBlog/index';
import Cadastro from './pages/Cadastro/index';
import Login from './pages/Login/index';
import ComoFunciona from './pages/ComoFunciona/index';
import SobreNos from './pages/SobreNos/index';
import Ajuda from './pages/Ajuda/index';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota com Header */}
        <Route path="/" element={<LayoutWithHeader><Home /></LayoutWithHeader>} />

        {/* Rotas sem Header */}
        <Route path="/palestrantes" element={<LayoutWithoutHeader><Palestrantes /></LayoutWithoutHeader>} />
        <Route path="/acesso" element={<LayoutWithoutHeader><Acesso /></LayoutWithoutHeader>} />
        <Route path="/ingressos" element={<LayoutWithoutHeader><Ingressos /></LayoutWithoutHeader>} />
        <Route path="/contato" element={<LayoutWithoutHeader><Contato /></LayoutWithoutHeader>} />
        <Route path="/mais-blog" element={<LayoutWithoutHeader><MaisBlog /></LayoutWithoutHeader>} />
        <Route path="/cadastro" element={<LayoutWithoutHeader><Cadastro /></LayoutWithoutHeader>} />
        <Route path="/login1-2" element={<LayoutWithoutHeader><Login /></LayoutWithoutHeader>} />
        <Route path="/comofunciona" element={<LayoutWithoutHeader><ComoFunciona /></LayoutWithoutHeader>} />
        <Route path="/sobrenos" element={<LayoutWithoutHeader><SobreNos /></LayoutWithoutHeader>} />
        <Route path="/ajuda" element={<LayoutWithoutHeader><Ajuda /></LayoutWithoutHeader>} />
      </Routes>
    </Router>
  );
};

export default App;
