import './technologies.scss'
import { useState } from 'react'

export default function Technologies() {
  const [hovered, setHovered] = useState('');

  const tecnologias = [
    { 
      id: '1', 
      nome: 'HTML',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      desc: 'HTML é uma linguagem de marcação que uso na construção de páginas na Web. Com ela é possível estruturar o conteúdo de um site, como textos, imagens, vídeos, entre outros. Também é possível definir a aparência do conteúdo, como fontes, cores, margens, entre outros.' 
    },
    { 
      id: '2', 
      nome: 'CSS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      desc: 'CSS é uma linguagem de estilo que utilizo para definir a apresentação de documentos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo dos documentos HTML da formatação, permitindo que o mesmo documento HTML seja apresentado de formas diferentes, como em diferentes monitores, impressoras, telas de dispositivos móveis e muito mais.' 
    },

    {
      id: '3',
      nome: 'Sass',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      desc: 'Sass é uma linguagem de folhas de estilo compilada que uso para estilizar os meus projetos. É uma extensão da linguagem CSS que adiciona recursos que não estão disponíveis na linguagem CSS padrão. SassScript é a linguagem de script interpretada incorporada em Sass.'
    },

    { 
      id: '4', 
      nome: 'Javascript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      desc: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível que uso para tipagem dinâmica fraca e multi-paradigma (protótipo, orientada a objeto, imperativa e, funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
    },
    {
      id: '5',
      nome: 'Node.js',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      desc: 'Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, que uso para criar aplicações de rede escaláveis. Não é uma parte do javascript que utilizo constantemente porém é uma tecnologia javascript que estou estudando e que pretendo utilizar em breve.'
    },
    {
      id: '6',
      nome: 'React',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      desc: 'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantida pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. Esta é a que mais recentemente passei a utilizar, e estou gostando bastante inclusive este portifolio foi feito totalmente em react com sass.'
    },
    {
      id: '7',
      nome: 'Jquery',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
      desc: 'jQuery é uma biblioteca JavaScript de código aberto, multiplataforma, que uso para simplificar a programação do lado do cliente. A biblioteca jQuery foi originalmente projetada para simplificar a programação de scripts para páginas HTML. Utilizo ela quanto tenho que realizar um projeto em django que necessita de uma interface mais dinâmica.'
    },

    { 
      id: '8', 
      nome: 'Python',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      desc: 'Python é uma linguagem de programação que utilizo constante e diariamente para desenvolver meus projetos. Python é uma linguagem de programação interpretada de alto nível, multiparadigma e de tipagem dinâmica. Foi lançada por Guido van Rossum em 1991. Atualmente possui um modelo de desenvolvimento comunitário, aberto e gerenciado pela organização sem fins lucrativos Python Software Foundation.'
    },
    {
      id: '9',
      nome: 'Django',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      desc: 'Django é um framework web de código aberto, escrito em Python, que utiliza o padrão de projeto Model-Template-View (MTV). É o framework que mais uso no dia a dia do meu trabalho para lidar com o back-end de um sistema complexo.'
    },
    {
      id: '10',
      nome: 'Java',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      desc: 'Java já é uma linguagem mais robusta para criar pequenos sitemas arquitetados em padrões de projetos da programação. Também utilizo muito da linguagem para construir APIs assim como no python.'
    },
    {
      id: '11',
      nome: 'MySQL',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      desc: 'MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É um dos sistemas de gerenciamento de banco de dados mais populares do mundo, usado em uma grande variedade de aplicações, incluindo web sites, servidores de aplicativos e sistemas de grande porte.'
    },
    {
      id: '12',
      nome: 'Git',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      desc: 'Git é um sistema de controle de versão distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo. É um software livre e de código aberto.'
    },
    {
      id: '13',
      nome: 'PostgreSQL',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      desc: 'PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, que utiliza e estende a linguagem SQL combinada com muitos recursos que armazenam e recuperam dados de um banco de dados relacional. Uso bastante esse banco de dados para armazenar dados de usuários e de projetos principalmente com o django.'
    },
    {
      id: '14',
      nome: 'Docker',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      desc: 'Docker é uma plataforma de código aberto que automatiza a implantação de aplicativos dentro de contêineres de software, fornecendo uma camada adicional de abstração e automação de virtualização de nível de sistema operacional no Windows e no Linux. Este uso para rodar containers de sistemas como django por exemplo.'
    },
    {
      id: '15',
      nome: 'AWS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      desc: 'Amazon Web Services (AWS) é uma plataforma de computação em nuvem oferecida pela Amazon.com. A AWS oferece uma variedade de serviços de computação, incluindo computação em nuvem, armazenamento em nuvem, bancos de dados em nuvem, análise de dados em nuvem, desenvolvimento de aplicativos em nuvem,. Uso para hospedar meus projetos e também para armazenar dados.'
    },
    {
      id: '16',
      nome: 'Dart',
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
      desc: 'Dart (originalmente denominada Dash) é uma linguagem de script voltada à web desenvolvida pela Google. Ela foi lançada na GOTO Conference 2011,[3] que aconteceu de 10 a 11 de outubro de 2011 em Aarhus, na Dinamarca. O objetivo da linguagem Dart foi inicialmente a de substituir a JavaScript como a linguagem principal embutida nos navegadores.[4] Programas nesta linguagem podem tanto serem executados em uma máquina virtual quanto compilados para JavaScript.'
    },
    {
      id: '17',
      nome: 'Flutter',
      img: '"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"',
      desc: 'A primeira versão do Flutter era conhecida com o codinome "Sky" e era executada no sistema operacional Android. Foi apresentado na cúpula de desenvolvedores Dart de 2015, com a intenção declarada de ser capaz de renderizar consistentemente a 120 quadros por segundo. Durante a keynote do Google Developer Days em Xangai, o Google anunciou o Flutter Release Preview 2, que é o último grande lançamento antes do Flutter 1.0.'
    },
  ];

  const handleHover = (id) => {
    setHovered(id);
  }

  const handleLeave = () => {
    setHovered('');
  }

  return (
    <div className='technologies' id='technologies'>
      <h1>Tecnologias</h1>
      <div className="cards">
        {tecnologias.map((tecnologia) => (
          <div
            key={tecnologia.id}
            className={`card ${hovered === tecnologia.id ? 'hovered' : ''}`}
            onMouseEnter={() => handleHover(tecnologia.id)}
            onMouseLeave={() => handleLeave()}
          >
            <div className="box">
            <img src={tecnologia.img} alt="" />
            <h4>{tecnologia.nome}</h4>
            <p>{tecnologia.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
