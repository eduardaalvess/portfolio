import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      
      {/* Categoria de Java */}
      <div className="projects-category">
        <h3>Java</h3>
        <div className="projects-container">
          <div className="project-card">
            <img src=" " alt="Biblioteca" />
            <div className="card-content">
              <h3>Biblioteca</h3>
              <p>Sistema de Gerenciamento de Biblioteca. Inclui funções para
                cadastro de usuários, registro e emprestimos de livros, e controle
                de devoluções usando uma interface gráfica com JavaFX e persistência em 
                banco de dados (PostgreSQL).
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src=" " alt="Mercadinho" />
            <div className="card-content">
              <h3>Mercadinho</h3>
              <p>API REST com Spring Boot para um sistema de gerenciamento de inventário, 
                cadastro de produtos e controle de estoque de um mercadinho. 
                Esse projeto tem como objetivo demostrar habilidades na criação 
                de serviços back-end, estrutura MVC e uso de bancos de dados relacionais.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src=" " alt="Xadrez" />
            <div className="card-content">
              <h3>Jogo de Xadrez</h3>
              <p>Simulador de Xadrez com regras completas, incluindo a detecção de 
                xeque e xeque-mate. Esse projeto tem como objetivo demostrar o desenvolvimento
                de lógica complexa e implementação de interface gráfica. 
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categoria de Python */}
      <div className="projects-category">
        <h3>Python</h3>
        <div className="projects-container">
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-java.jpg" alt="Do It!" />
            <div className="card-content">
              <h3>Do It!</h3>
              <p>API RESTful com Django e Flask. API para sistema de controle financeiro.
                Serve de armazenamento e manipulação de dados dos usuários, permitindo
                a integração com outras aplicações.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-java.jpg" alt="Chatinho" />
            <div className="card-content">
              <h3>Chatinho</h3>
              <p>Chatbot focado em automatizar respostas em redes sociais criado
                utilizando a biblioteca NLTK.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-java.jpg" alt="Remember" />
            <div className="card-content">
              <h3>Remember</h3>
              <p>Aplicação de Reconhecimento de Imagens utilizando a biblioteca OpenCV
                que pode reconhecer objetos, placas de trânsito e rostos. 
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-java.jpg" alt="Headache" />
            <div className="card-content">
              <h3>Headache</h3>
              <p>Jogo em 2D com Pygame de quebra-cabeça com o objetivo de demostrar
                habilidades lógicas e implementação de interface gráficas.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categoria de JavaScript */}
      <div className="projects-category">
        <h3>JavaScript</h3>
        <div className="projects-container">
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-python.jpg" alt="Spotmiau" />
            <div className="card-content">
              <h3>Spotmiau</h3>
              <p>Aplicação que permite que usuários ouçam músicas com funcionalidades
                de playlists, controle de reprodução e recomendação de conteúdo utilizando
                Node.js para manipular e salvar os dados dos usuários.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-python.jpg" alt="API JS" />
            <div className="card-content">
              <h3>API de Reconhecimento Facial</h3>
              <p>API com Node.js que utiliza bibliotecas de reconhecimento facial e 
                comparar rostos em imagens.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categoria de C# */}
        <div className="projects-category">
        <h3>C#</h3>
        <div className="projects-container">
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-python.jpg" alt="Duda Finanças" />
            <div className="card-content">
              <h3>Duda Finanças</h3>
              <p>Aplicação para que usuários acompanhem e simulem suas finanças com
                funcionalidades para adicionar despesas, receitas e metas de economia. 
                Utiliza Blazor para interface e Entity para armazenamento dos dados.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-python.jpg" alt="Projeto Python" />
            <div className="card-content">
              <h3>Organize</h3>
              <p>Gerenciador de tarefas utilizando o ASP.NET Core. Tem funcionalidades de 
                criação, edição, exclusão de tarefas. Armazenamento de dados com PostgreSQL.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="link-da-imagem-do-projeto-python.jpg" alt="Projeto Python" />
            <div className="card-content">
              <h3>Magazine Eduarda</h3>
              <p>API REST com ASP.NET Core para sistema de e-commerce que gerencia produtos, 
                carrinho de compras, pedidos e usuários. Utiliza o Entity para integração com 
                banco de dados e possui funcionalidades de autenticação para usuários.
              </p>
              <div className="card-links">
                <a href="link-do-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="link-da-demo" target="_blank" rel="noopener noreferrer">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;
