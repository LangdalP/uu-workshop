import React, { useEffect, useState } from 'react'
import Innsendt from './Innsendt'

function Kontakt() {
  const [hasSubmitted, setHasSubmitted] = useState(false)

  if (hasSubmitted) {
    return <Innsendt />
  }
  return (
    <>
      <h1>Feedback og kontaktskjema</h1>
      <div className="form">
        <div onClick={() => setHasSubmitted(true)} className="submitButton">
          Send inn
        </div>

        <p>Kor kul synest du sida mi er?</p>

        <div>
          <input type="checkbox" id="nei" name="nei" defaultChecked />
          <span>Nei</span>
        </div>

        <div>
          <input type="checkbox" id="litt" name="litt" />
          <span>Litt</span>
        </div>

        <div>
          <input type="checkbox" id="veldig" name="veldig" />
          <label htmlFor="veldig">Veldig!</label>
        </div>

        <p>Epost</p>
        <input type="text" id="epost" name="epost" />

        <p>Kva vil du kontakte meg om?</p>

        <textarea>Skriv her</textarea>
      </div>
    </>
  )
}

export default Kontakt
