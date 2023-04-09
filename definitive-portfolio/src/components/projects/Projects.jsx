import './projects.scss'
import { useState } from 'react'

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: '1',
      icon: 'assets/front-end.png',
      title: 'Web Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus suscipit, esse atque ad enim hic? Non saepe quam voluptate nihil, porro magni nulla nisi minima impedit tenetur obcaecati nostrum.',
      img: 'assets/mobile.png'
    },
    {
      id: '2',
      icon: 'assets/front-end.png',
      title: 'Mobile App',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus suscipit, esse atque ad enim hic? Non saepe quam voluptate nihil, porro magni nulla nisi minima impedit tenetur obcaecati nostrum.',
      img: 'assets/globe.png'
    },
  ]

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className='projects'id='projects'>
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
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <div className="rightContainer">
                  <img src="assets/psc.png"/>
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
