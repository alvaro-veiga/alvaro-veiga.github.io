import './contact.scss'

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact'id='contact'>
      <div className="left">
        <img src="assets/contact.svg"/>
      </div>
      <div className="right">
        <h2>Contato.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Mensagem'></textarea>
          <button type='submit'>Enviar</button>
          {message && <span>Obrigado, entrarei em contato!</span>}
        </form>
      </div>
    </div>
  )
}
