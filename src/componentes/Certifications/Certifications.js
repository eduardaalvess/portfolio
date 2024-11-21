import React from 'react';
import './Certifications.css';

const Certificados = () => {
  const certificados = [
    {
      id: 1,
      titulo: 'AWS Fundamentals',
      descricao: 'A certificação AWS Fundamentals pela AWS oferece uma visão geral dos principais serviços de computação em nuvem da Amazon, como EC2, S3, RDS e Lambda. O curso abrange conceitos básicos de arquitetura de nuvem, segurança, escalabilidade e práticas recomendadas para implementar soluções na AWS.',
      pdfLink: ' ',
    },
    {
      id: 2,
      titulo: 'HTML Web Developer',
      descricao: 'O Bootcamp HTML Web Developer da DIO ofereceu fundamentos essenciais do desenvolvimento web, com foco em HTML, CSS e JavaScript. Durante o curso, pratiquei a criação de interfaces responsivas e funcionais, desenvolvendo habilidades em estruturação de páginas, estilização e interatividade para a web.',
      pdfLink: 'https://www.dio.me/certificate/CFBF422A/share',
    },
    {
      id: 3,
      titulo: 'Programação em Python',
      descricao: 'A certificação Programação em Python pela Meta abrange os fundamentos da linguagem Python, incluindo sintaxe, estruturas de controle, manipulação de dados, funções e bibliotecas. O curso também introduz boas práticas de programação e a aplicação de Python em soluções práticas no mercado de tecnologia.',
      pdfLink: ' ',
    },
    {
      id: 4,
      titulo: '.NET Fundamentals',
      descricao: 'O Bootcamp .NET Fundamentals da DIO proporcionou uma base sólida em C# e .NET, abordando conceitos como desenvolvimento de aplicações orientadas a objetos, manipulação de dados e criação de APIs. Trabalhei com o framework ASP.NET para construir aplicações robustas e escaláveis, focando em boas práticas de codificação e organização de projetos.',
      pdfLink: 'https://www.dio.me/certificate/C25DE266/share',
    },
    {
      id: 5,
      titulo: 'Java Programming and Software Engineering Fundamentals',
      descricao: 'A certificação pela Duke University forneceu uma base sólida em programação Java e engenharia de software. O curso abordou conceitos essenciais como orientação a objetos, estrutura de dados, depuração e design de software, além de práticas recomendadas para desenvolvimento e teste de aplicativos.',
      pdfLink: ' ',
    },
    {
      id: 6,
      titulo: 'DevOps & Agile Culture',
      descricao: 'A certificação em DevOps e Agile Culture pela FIAP aborda práticas colaborativas entre equipes de desenvolvimento e operações, promovendo a entrega contínua de software. O curso também explora os fundamentos de metodologias ágeis, como Scrum e Kanban, enfatizando a adaptação a mudanças e a melhoria constante nos processos.',
      pdfLink: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/53373/b177945c69f67110151ae8f527215ba6/certificado.png',
    },
    {
      id: 7,
      titulo: 'Java Developer',
      descricao: 'O Bootcamp Java Developer da DIO proporcionou aprendizado prático em desenvolvimento back-end com Java. Durante o programa, trabalhei com Spring Boot para criação de APIs, testes automatizados com JUnit e manipulação de bancos de dados relacionais, fortalecendo habilidades em design de software e boas práticas de programação.',
      pdfLink: 'https://www.dio.me/certificate/7013A0D6/share',
    },
    {
      id: 8,
      titulo: 'Responsive Web Development',
      descricao: 'A certificação em Responsive Web Development pela FIAP abrangeu os fundamentos e práticas modernas de desenvolvimento web responsivo. O curso explorou técnicas para criar interfaces adaptáveis a diferentes dispositivos e tamanhos de tela, com foco em HTML5, CSS3 e design mobile-first, garantindo experiências de usuário consistentes e otimizadas.',
      pdfLink: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/54827/7edc8fca6eebb99a39ccad5d685c49e6/certificado.png',
    },
    {
      id: 9,
      titulo: 'Orientação a Objetos com Java',
      descricao: 'A certificação Orientação a Objetos com Java pelo Instituto Tecnológico de Aeronáutica (ITA) aborda os princípios da programação orientada a objetos (POO) utilizando a linguagem Java. O curso foca em conceitos essenciais como encapsulamento, herança, polimorfismo e abstração, além de ensinar como modelar e organizar sistemas de software de forma modular e escalável. A aplicação prática desses conceitos é explorada por meio de exercícios que simulam problemas do mundo real, utilizando a plataforma Java.',
      pdfLink: ' ',
    },
    {
      id: 10,
      titulo: 'Liderança, Capacidade de Aprender e Resiliência',
      descricao: 'A certificação em Liderança, Capacidade de Aprender e Resiliência pela PUCRS foi um curso inspirador conduzido por personalidades renomadas como Malala Yousafzai, Leandro Karnal e Flávio Augusto. O programa abordou habilidades fundamentais para enfrentar desafios no âmbito pessoal e profissional, promovendo o desenvolvimento da resiliência, da liderança consciente e da aprendizagem contínua como ferramentas para alcançar objetivos e superar adversidades.',
      pdfLink: 'https://certificado.pucrs.br/fde6a09b-e32b-473b-81a0-afad332dd044#gs.hxj3m9',
    },


  ];

  return (
    <div className="certificados-section" id="certifications">
      <h2>Certificações</h2>
      <div className="certificados-container">
        {certificados.map((certificado) => (
          <div key={certificado.id} className="certificado-card">
            <h3>{certificado.titulo}</h3>
            <p>{certificado.descricao}</p>
            <a href={certificado.pdfLink} target="_blank" rel="noopener noreferrer" className="btn-visualizar">
              Visualizar Certificado
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificados;
