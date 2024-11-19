import React, { useState } from 'react';
import './About.css';
import mayaImage from '../../img/maya.jpg';
import plinioImage from '../../img/plinio.jpg';
import miaImage from '../../img/mia.jpg';
import jamesImage from '../../img/james.jpg';

function Sobre() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="about-page">
      <section id="about" className="about">
        <h2>Resumo</h2>
        <div className="about-summary">
          <p>Ao longo da minha trajetória profissional, 
            desenvolvi competências nas linguagens Java, 
            JavaScript, Python e C#. Por meio do uso de 
            frameworks como Spring Boot, Node.js, React e 
            .NET, pude explorar de maneira aprofundada o 
            potencial de cada uma dessas tecnologias. 
            Adicionalmente, possuo conhecimento em bancos 
            de dados relacionais, como MySQL e PostgreSQL, 
            bem como em bancos de dados não relacionais, 
            como MongoDB. Tenho também uma base teórica sólida 
            em plataformas de computação em nuvem, incluindo 
            Azure e AWS. Comprometida com o crescimento contínuo, 
            busco constantemente expandir meus conhecimentos por 
            meio de certificações e cursos de especialização.</p>
        </div>
      </section>

      <section id="educacao">
        <div className="education-section">
          <h2>Educação</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2018</h4>
                <p>Início da graduação em Ciência da Computação na 
                  Universidade Federal Rural de Pernambuco.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Início da graduação em Computação em Nuvem no 
                  Centro Universitário UniÁmerica Descomplica.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>2024</h4>
                <p>Conclusão da graduação em Computação em Nuvem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="experience-section">
  <h3>Experiência Profissional</h3>
  <div className="experience-card" onClick={() => setShowDetails(!showDetails)}>
    <h4>Avanade</h4>
    <p>Estágio - Back-End Developer</p>
    {showDetails && (
      <div className="experience-details">
        <p>
          Durante 1 ano e meio, atuei na Avanade com foco em desenvolvimento
          back-end. Desenvolvi conhecimentos teóricos e práticos utilizando 
          tecnologias como JavaScript, NodeJS, C#, .NET e serviços da plataforma 
          de computação em nuvem Azure. Durante minha experiência, tive a oportunidade
          de desenvolver habilidades na criação de APIs robustas e seguras, em implementações
          de soluções em nuvem, além de trabalhar em um ambiente colaborativo que 
          utilizava metodologias ágeis, como Scrum e Kanban, para garantir entregas 
          eficientes e alinhadas às necessidades do cliente.
        </p>
      </div>
    )}
  </div>
</section>


      <section id="sobre-mim">
        <div className="about-me-section">
          <h3>Sobre Mim</h3>
          <p>Além dos computadores, códigos e café (com leite), 
            sou uma canceriana, apaixonada por bons livros, 
            vinhos, filmes e pela música da Beyoncé. Sou apaixonada 
            por animais e jamais perderia a oportunidade de apresentá-los. 
            Eis aqui, meus amores.</p>

          {/* Seção de Maya */}
          <div className="animal-item">
            <img src={mayaImage} alt="Maya" className="animal-img" />
            <div className="animal-text">
              <h4>Maya</h4>
              <p>SRD. Palavras favoritas: comida e passeio. 
                Foi adotada em 2021. É leal como um bom cão deve ser. 
                Sempre quer estar por perto. Quando a adotei, 
                achei que iria cuidar dela. Mas é ela quem cuida de mim.</p>
            </div>
          </div>

          {/* Seção de Plínio */}
          <div className="animal-item">
            <img src={plinioImage} alt="Plínio" className="animal-img" />
            <div className="animal-text">
              <h4>Plínio</h4>
              <p>SRD. Palavras favoritas: o silencio. Estamos acostumados 
                a dizer que a casa pertence a ele, e ele, em sua benevolência, 
                nos permite viver nela. Também foi adotado em 2021.</p>
            </div>
          </div>

          {/* Seção de Mia */}
          <div className="animal-item">
            <img src={miaImage} alt="Mia" className="animal-img" />
            <div className="animal-text">
              <h4>Mia</h4>
              <p>SRD. Palavras favoritas: comida e carinho. O nome lhe faz jus. 
                Ela adora miar. Foi adotada em 2024. Provavelmente no exato 
                momento em que estiver lendo isso, ela estará miando.</p>
            </div>
          </div>

          {/* Seção de Daniel James */}
          <div className="animal-item">
            <img src={jamesImage} alt="Daniel James" className="animal-img" />
            <div className="animal-text">
              <h4>Daniel James (In Memoriam)</h4>
              <p>Porquinho-da-índia inglês (pelo curto). Palavras favoritas: 
                comida. Infelizmente ele se foi em 2023. No entanto, sempre 
                estará em nossos corações, pois ele foi o porquinho-da-índia 
                mais corajoso que já conhecemos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Sobre;
