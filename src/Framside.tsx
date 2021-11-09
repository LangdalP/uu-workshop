import React, { useEffect } from 'react'
import Notification from 'rc-notification'
import { Close } from '@mui/icons-material'
import frisbeeDude from './images/frisbee-dude.jpg'
import frisbeeSteve from './images/steve-mcqueen-frisbee.jpg'
import eagleMcmahon from './images/eagle-mcmahon-drive.jpg'
import frisbeeWind from './images/frisbee-wind.jpg'

const createNotification = () => {
  Notification.newInstance({ style: {} }, (notification) => {
    notification.notice({
      closable: true,
      content: (
        <a href="https://gurudiscgolf.no/">
          Kjøp disker på Guru Disc Golf med rabattkode beBEKK20.
        </a>
      ),
      duration: 3,
      closeIcon: <Close />,
      style: {},
      /* props: { role: 'alert' }, */
    })
  })
}

function Framside() {
  useEffect(() => {
    setTimeout(() => createNotification(), 5000)
  }, [])

  return (
    <>
      <div className="framside">
        <div style={{ fontWeight: 'bold', fontSize: 16, margin: '20px 0' }}>
          Inspirasjon
        </div>
        <img src={frisbeeDude} className="inspo-pic"></img>
        <img src={frisbeeSteve} className="inspo-pic"></img>
        <img src={eagleMcmahon} className="inspo-pic"></img>
        <h1>Kvifor eg synest at Latitude 64 har dei beste diskane!</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
          varius velit, id eleifend urna. Ut gravida elementum aliquet. Aenean
          cursus metus iaculis eros cursus fringilla. Fusce porttitor interdum
          sem. Pellentesque vitae laoreet risus. Suspendisse aliquet sem nisl,
          eget vulputate libero cursus vel. Quisque congue, tellus a tincidunt
          auctor, orci arcu dapibus lectus, placerat dignissim metus sapien sed
          nisl. Curabitur pulvinar lacus eget laoreet luctus. Phasellus feugiat,
          felis in porta pulvinar, augue elit elementum magna, pretium
          scelerisque sem est sit amet nisi. In vel semper turpis, a placerat
          ligula. Nam faucibus nibh quis vehicula pretium. Donec ut condimentum
          tortor. In tempor tincidunt egestas. Ut condimentum sollicitudin
          mauris, et pharetra sapien ornare nec. Praesent tellus est, commodo
          vitae justo nec, mollis fringilla lacus.
        </div>
        <div>
          Nulla tristique ultrices magna at venenatis. Quisque id hendrerit
          nisi. Etiam molestie, velit vestibulum cursus bibendum, nulla nisl
          pulvinar lectus, malesuada sollicitudin sapien justo quis ipsum.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer faucibus lorem non mauris faucibus
          bibendum in vitae nisi. Proin sed dolor mi. Praesent quis cursus nibh.
          Suspendisse nec tortor blandit, tempus quam at, eleifend nisi.
          Suspendisse potenti.
        </div>
        <h1>Korleis blir diskar påverka av vinden?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
          varius velit, id eleifend urna. Ut gravida elementum aliquet. Aenean
          cursus metus iaculis eros cursus fringilla. Fusce porttitor interdum
          sem. Pellentesque vitae laoreet risus. Suspendisse aliquet sem nisl,
          eget vulputate libero cursus vel. Quisque congue, tellus a tincidunt
          auctor, orci arcu dapibus lectus, placerat dignissim metus sapien sed
          nisl. Curabitur pulvinar lacus eget laoreet luctus. Phasellus feugiat,
          felis in porta pulvinar, augue elit elementum magna, pretium
          scelerisque sem est sit amet nisi. In vel semper turpis, a placerat
          ligula. Nam faucibus nibh quis vehicula pretium. Donec ut condimentum
          tortor. In tempor tincidunt egestas. Ut condimentum sollicitudin
          mauris, et pharetra sapien ornare nec. Praesent tellus est, commodo
          vitae justo nec, mollis fringilla lacus.
        </p>

        <img src={frisbeeWind} />

        <div>
          Nulla tristique ultrices magna at venenatis. Quisque id hendrerit
          nisi. Etiam molestie, velit vestibulum cursus bibendum, nulla nisl
          pulvinar lectus, malesuada sollicitudin sapien justo quis ipsum.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer faucibus lorem non mauris faucibus
          bibendum in vitae nisi. Proin sed dolor mi. Praesent quis cursus nibh.
          Suspendisse nec tortor blandit, tempus quam at, eleifend nisi.
          Suspendisse potenti.
        </div>
      </div>
    </>
  )
}

export default Framside
