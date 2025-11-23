import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <section className="hero">
           <Button />
        <h2>Welcome to <span className="highlight">WIEEE Code</span></h2>
        <h1>
          hello my name is stuti
        </h1>
        <p>helo my last name is pandya</p>
        <p>
          Kickstart your project using this React template.
          Customize it with your own idea, theme, and creativity!
        </p>
        <button onClick={() => navigate('/about')}>Go to Project Page</button>
        <button onClick={() => navigate('/stuti')}>Go to Stuti Page</button>
      </section>
    </div>
  )
}
