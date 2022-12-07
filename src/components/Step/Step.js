import React from 'react'
import './Step.css'

const Step = ({ number, step, active }) => {
  return (
    <div className={ active ? "step active" : "step"}>
        <div className="number">{number}</div>
        <div className="text-wrap">
            <span>Step {number}</span>
            <p>{step}</p>
        </div>
    </div>
  )
}

export default Step