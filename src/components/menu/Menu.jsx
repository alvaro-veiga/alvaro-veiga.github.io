import "./menu.scss"
import { IoIosMail } from 'react-icons/io'
import { RxPerson } from 'react-icons/rx'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#projects">Projetos</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#technologies">Habilidades</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#testimonials">Feedbacks</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#contacts">Contatos</a>
        </li>
      </ul>
      <div className="itemContainer">
        <IoIosMail className='icon'/>
        <a href="mailto:alvarojoao17@gmail.com">
          <span>alvaro.veiga.dev@gmail.com</span>
        </a>
      </div>
    </div>
  )
}
