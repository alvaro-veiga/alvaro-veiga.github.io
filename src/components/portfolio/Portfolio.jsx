import List from '../portfolioList/List'
import './portfolio.scss'
import { useEffect, useState } from 'react'
import { featuredPortfolio, frontendPortfolio, backendPortfolio } from '../../data'

export default function Portfolio() {
    const[selected, setSelected] = useState("featured")
    const[data, setData] = useState([])
  const list = [
    {
      id: 'featured',
      title: 'Destaques',
    },
    {
      id: 'frontend',
      title: 'Front-end',
    },
    {
      id: 'backend',
      title: 'Back-end',
    }
  ]

  useEffect(() => {
    switch(selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "frontend":
        setData(frontendPortfolio)
        break;
      case "backend":
        setData(backendPortfolio)
        break;
      default:
        setData(featuredPortfolio)
    }
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <div className='text'>
        <h4>Atualmente estou cursando engenharia de software e faço estágio em uma empresa de logistica localiza no Rio de Janeiro e estou adquirindo bastante conhecimento em programação e desenvolvimento Web tanto front-end quanto back-end. As linguagens de programação que eu mais possuo conhecimento são Python, Java e Javascript. Também utilizo constantemente as ferramentas básica de desenvolvimento web como o HTML5 e CSS3. E como frameworks que utilizo para deixar meus projetos mais dinâmicos são Flask, Django, React.js e Bootstrap. Além de bancos de dados relacionais como o PostgreSQL e o MySQL utilizando também a plataforma de serviço Devops sendo estes o Docker e por fim serviços de cloud como AWS e google cloud.
        </h4>
      </div>
      <ul>
         {list.map(item => (
          <List title={item.title} active={ selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <a href={d.link}>
            <img src={d.img}/>
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
        </div>
      </div>
  )
}
