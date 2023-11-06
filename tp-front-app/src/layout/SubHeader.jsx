import React from 'react'
import centerLogo from '../img/main/centerLogo.svg'

import '../css/main/Main.css'

export default function SubHeader() {
  return (
    <div>
        SubHeader
        <img className="left-logo" src={centerLogo} alt="TripPenguinLogo" />
    </div>
  )
}