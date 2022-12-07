import React from 'react'
import './Main.css'
import StepOne from '../Step-One/StepOne'
import StepTwo from '../Step-Two/StepTwo'
import StepThree from '../Step-Three/StepThree'
import StepFour from '../Step-Four/StepFour'
import Confirmation from '../Confirmation/Confirmation'

const Main = ({ step, setStep }) => {
  const nextPage = () => {
    setStep(step + 1);
  }

  const prevPage = () => {
    setStep(step - 1);
  }

  const currentPage = () => {
    switch (step) {
      case 1:
        return <StepOne nextPage={nextPage} />
      case 2:
        return <StepTwo nextPage={nextPage} prevPage={prevPage} />
      case 3:
        return <StepThree nextPage={nextPage} prevPage={prevPage} />
      case 4: 
        return <StepFour nextPage={nextPage} prevPage={prevPage} />
      default: 
        return <Confirmation />
    }
  }
  return (
    <div className="main">
      {currentPage()}
    </div>
  )
}

export default Main