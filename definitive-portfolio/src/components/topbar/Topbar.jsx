import './topbar.scss'
import { IoIosMail } from 'react-icons/io'
import { RxPerson } from 'react-icons/rx'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>ajsv.</a>
          <div className="itemContainer">
            <RxPerson className='icon'/>
            <span>+55 99999-9999</span>
          </div>
          <div className="itemContainer">
            <IoIosMail className='icon'/>
            <span>+55 99999-9999</span>
          </div>
        </div>
        <div className='right'>
        </div>
      </div>
    </div>
  )
}
