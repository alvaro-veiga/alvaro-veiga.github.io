import './projects.scss'
import { useState } from 'react'

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: '1',
      icon: 'assets/front-end.png',
      title: 'Professional carrer system',
      desc: 'Trata se de um pequeno sistema de gerenciamento de carreira profissional, onde o usuário pode cadastrar seus dados pessoais, suas experiências profissionais e suas habilidades. O sistema também permite que o usuário possa gerar um currículo em PDF.',
      img: 'assets/psc.png',
      link: 'https://github.com/allystor/professional-career-system'
    },
    {
      id: '2',
      icon: 'assets/globe.png',
      title: 'snack station',
      desc: 'Pequeno site criado para uma lanchonete que funciona como um cardápio online, onde o usuário pode visualizar os produtos e fazer pedidos.',
      img: 'assets/resturant.jpg',
      link: 'https://github.com/allystor/Estacao-do-lanche'
    },
    {
      id: '3',
      icon: 'assets/front-end.png',
      title: 'Task control',
      desc: 'Pequena aplicação web para controle de tarefas, onde o usuário pode criar tarefas de acordo com o projeto, e também pode alterar o status da tarefa, podendo ser: pendente, em andamento e concluída.',
      img: 'assets/kanban.jpg',
      link: 'https://github.com/allystor/Controle-de-tarefas'
    },
  ]

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className='projects'id='projects'>
      <h1>Projetos</h1>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a href={d.link}>{d.link}</a>
                  </span>
                </div>
              </div>
              <div className="right">
                <div className="rightContainer">
                  <img src={d.img}/>
                </div>
              </div>
            </div>
          </div>
        ))}      
      </div>
      <img src="assets/next.png" className='arrow left' alt="arrow left" onClick={()=>handleClick("left")}/>
      <img src="assets/next.png" className='arrow right'alt="arrow" onClick={()=>handleClick()}/>
    </div>
  )
}
