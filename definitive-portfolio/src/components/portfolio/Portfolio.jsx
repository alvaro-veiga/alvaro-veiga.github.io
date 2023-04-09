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
    <div className='portfolio' id='intro'>
      <h1>Portfolio</h1>
      <ul>
         {list.map(item => (
          <List title={item.title} active={ selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <img src={d.img}/>
            <h3>{d.title}</h3>
          </div>
        ))}
        </div>
      </div>
  )
}
