import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='intro'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Destaques</li>
        <li>front-end</li>
        <li>Back-end</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/refproject.png"/>
        </div>
        <h3>Kanban project</h3>
        <div className="item">
          <img src="assets/refproject.png"/>
        </div>
        <h3>Kanban project</h3>
        <div className="item">
          <img src="assets/refproject.png"/>
        </div>
        <h3>Kanban project</h3>
      </div>
    </div>
  )
}
