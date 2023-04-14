import './topbar.scss'
import { IoIosMail } from 'react-icons/io'
import { RxPerson } from 'react-icons/rx'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>ajsv.</a>
          <div className="itemContainer">
            <IoIosMail className='icon'/>
            <a href="mailto:alvarojoao17@gmail.com">
              <span>alvaro.veiga.dev@gmail.com</span>
            </a>
          </div>
        </div>
        <div className='right'>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line 1'></span>
            <span className='line 2'></span>
            <span className='line 3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
