import '../../assets/css/style_geral.css';
import React from 'react';
import principalImg from '../../assets/images/principal.png';
import evento1Img from '../../assets/images/img-campo5.png';
import evento2Img from '../../assets/images/img-campo8-g.png';
import evento3Img from '../../assets/images/img-versatil.png';
import evento4Img from '../../assets/images/img-campo4.png';
import conversaImg from '../../assets/images/conversa.png';
import blogImg1 from '../../assets/images/img-campo2.png';
import blogImg2 from '../../assets/images/img-campo1.png';
import blogImg3 from '../../assets/images/img-campo3.png';
import logobranco from '../../assets/images/logo-branco.png';

const Home = () => {
  return (

    <main>
      
      <section className="secao-especial">
        <img src={principalImg} alt="tela inicial" className="imagem-principal" />
      </section>


      <section className="proximos-eventos">
        <h2>Próximos Eventos</h2>
        <div className="img-eventos">
          <a href="#"><img src={evento1Img} alt="carrinho" /></a>
          <a href="#"><img src={evento2Img} alt="softweek" /></a>
          <a href="#"><img src={evento3Img} alt="códigos" /></a>
          <a href="#"><img src={evento4Img} alt="confra" /></a>
        </div>
      </section>

      <div className="sections-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <section className="crie-proprio-evento">
        <img src={conversaImg} alt="conversa" className="img-criar-evento" />
        <div id="texto-criar-evento">
          <h3>Crie seu próprio Evento</h3>
          <p>Tem uma ideia legal de eventos e precisa levantar os fundos para a realização? É só criar!</p>
        </div>
        <div className="botao-criar-evento">
          <a href="/acesso">
            <button>Criar Evento</button>
          </a>
        </div>
      </section>
      </div>

      <section className="blog">
        <h2>Blog da Campo</h2>
        <p>Uma pitada sobre o que acontece em nosso mundo.</p>
        <div id="imagens-blog" className="img-blog-container">
          <div className="img-blog">
            <img src={blogImg1} alt="Hackabeer" />
            <h3>Hackabeer: o hackathon que vai revolucionar a indústria cervejeira em Guarapuava.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aperiam a iste quia praesentium eaque dignissimos ad dolor vel. Itaque aliquam, voluptates dolores ab reiciendis accusamus at dolor maxime ipsa?</p>
          </div>
          <div className="img-blog">
            <img src={blogImg2} alt="Laboratório" />
            <h3>Inauguração do Laboratório de Radiologia Odontológica.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aperiam a iste quia praesentium eaque dignissimos ad dolor vel. Itaque aliquam, voluptates dolores ab reiciendis accusamus at dolor maxime ipsa?</p>
          </div>
          <div className="img-blog">
            <img src={blogImg3} alt="Anatomia" />
            <h3>Olha só a atividade da disciplina de Anatomia Humana, no curso de Fisioterapia.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aperiam a iste quia praesentium eaque dignissimos ad dolor vel. Itaque aliquam, voluptates dolores ab reiciendis accusamus at dolor maxime ipsa?</p>
          </div>
        </div>
        <div className="botao-blog-mais">
          <a href="/mais-blog">
            <button>Mais</button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-colunas">
          <div className="footer-intro">
          <img src={logobranco} alt="Logo CampoReal Eventos" />
            <p>Campo Real Eventos é um projeto desenvolvido como parte do Desafio Integrador no ano de 2023 para suprir uma demanda do departamento de TI na criação e realização dos eventos institucionais e acadêmicos no Centro Universitário Campo Real.</p>
          </div>

          <div id="campo-real-eventos-footer">
            <h3>Campo Real Eventos</h3>
              <p><a href="/ComoFunciona">Como Funciona?</a><br /></p>
              <p><a href="/SobreNos">Sobre Nós</a><br /></p>
              <p><a href="/Ajuda">Ajuda</a><br /></p>
          </div>

          <div className="fique-ligado">
            <h4><strong>Fique Ligado!</strong></h4>
            <p>Cadastre seu e-mail e fique ligado nos próximos eventos que serão realizados na Campo Real</p>

            <form action="assinar.php" method="post">
              <div className="campo-formulario">
                <input type="email" placeholder="e-mail..." />

                <div className="botao-assinar">
                  <input type="submit" value="Assinar" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="linha-footer">
          <p>Todos os direitos reservados para Anne Gabrielly Latchuk, Chiara Leonardi e Guilherme Rossoni</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
