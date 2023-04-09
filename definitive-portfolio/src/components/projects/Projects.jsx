import './projects.scss'

export default function Projects() {
  return (
    <div className='projects'id='projects'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/front-end.png" />
                </div>
                <h2>Title</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus suscipit, esse atque ad enim hic? Non saepe quam voluptate nihil, porro magni nulla nisi minima impedit tenetur obcaecati nostrum.</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <div className="rightContainer">
                <img src="assets/psc.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" alt="arrow left" />
      <img src="assets/arrow.png" alt="arrow right" />
    </div>
  )
}
