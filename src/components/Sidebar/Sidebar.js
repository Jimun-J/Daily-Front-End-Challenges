import React, { useEffect } from 'react'
import './Sidebar.css'
import Step from '../Step/Step'

const Sidebar = ({ step }) => {

  return (
    <div className="sidebar">
      <Step number={1} step={'Your Info'} active={step === 1 ? true : false}/>
      <Step number={2} step={'Select Plan'} active={step === 2 ? true : false}/>
      <Step number={3} step={'ADD-ONS'} active={step === 3 ? true : false} />
      <Step number={4} step={'Summary'} active={step === 4 ? true : false}/>
    </div>
  )
}

export default Sidebar