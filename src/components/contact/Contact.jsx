import './contact.scss'

export default function Contact() {
  return (
    <div className='contact'id='contacts'>
      <div className="left">
        <img src="assets/contact.svg"/>
      </div>
      <div className="right">
        <h2>Contato.</h2>
        <div className="iconContainer">
          <div className="iconInstagram">
            <a href='https://www.instagram.com/alvaro.veigones/'>
            <img src="assets/instagram.png"/>
            <span>Instagram</span>
            </a>
          </div>
          <div className="iconLinkedin">
            <a href='https://www.linkedin.com/in/%C3%A1lvaro-jo%C3%A3o-da-silva-veiga/'>
            <img src="assets/linkedin.png"/>
            <span>Linkedin</span>
            </a>
          </div>
          <div className="iconGithub">
            <a href='https://github.com/allystor'>  
            <img src="assets/github.png"/>
            <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
