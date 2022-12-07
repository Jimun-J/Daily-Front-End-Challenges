import React, { useState } from 'react'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import './Card.css'

const Card = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="card">
      <Sidebar step={step} />
      <Main step={step} setStep={setStep} />
    </div>
  )
}

export default Card