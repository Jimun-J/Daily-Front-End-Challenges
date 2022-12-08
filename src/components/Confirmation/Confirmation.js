import React from 'react'
import icon from '../../assets/images/icon-thank-you.svg'
const Confirmation = () => {
  return (
    <div className="thankyou">
        <img src={icon} alt=""/>
        <h1>Thank you!</h1>
        <span>
            Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free to email 
            us at support@loremgaming.com
        </span>
    </div>
  )
}

export default Confirmation