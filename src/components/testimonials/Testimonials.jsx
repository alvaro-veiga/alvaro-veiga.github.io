import './testimonials.scss'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Victor Menendes",
      title: "Web Developer",
      img:
        "assets/menendes.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Um grande amigo e um grande profissional. Sempre muito atencioso e disposto a ajudar. Recomendo!",
      link:"https://www.linkedin.com/in/victormenendes/",
      featured: true,
    },
    {
      id: 1,
      name: "Kayani Pereira",
      title: "Web Developer",
      img:
        "assets/kayani.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "Uma pessoa que trabalha com muito amor e dedicação no ramo que é designado. Sucesso sempre!",
      link:"https://www.linkedin.com/in/kayani-pereira-leandro-084160208/",
      featured: true,
    },
  ]
  return (
    <div className='testimonials'id='testimonials'>
      <h1>Testemunhas</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <div className='midia'>
                <a href={d.link}>
                <img className="right" src={d.icon} alt="" />
                </a>
              </div>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
