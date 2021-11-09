import React, { useEffect } from 'react'
import Notification from 'rc-notification'
import { Close } from '@mui/icons-material'
import Framside from './Framside'
import Kontakt from './Kontakt'
import './App.css'
import frisbee from './images/frisbee.png'

function App() {
  const pathname = window.location.pathname
  console.log(pathname)
  return (
    <div className="App">
      <div className="header">
        <div className="branding">
          <img
            src={frisbee}
            alt="En frisbee som flyr gjennom lufta"
            className="frisbeePic"
          />
          <h2>Peders diskgolfside</h2>
          <h3>Ikkje kall det frisbeegolf please!</h3>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="/">Framside</a>
            </li>
            <li>
              <a href="/kontakt">Kontakt meg</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        {pathname.startsWith('/kontakt') ? <Kontakt /> : <Framside />}
      </div>
      <div className="footer">
        <h1>Footer</h1>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
          Denne sida er laga med React + TypeScript + Vite
        </p>
      </div>
    </div>
  )
}

export default App
