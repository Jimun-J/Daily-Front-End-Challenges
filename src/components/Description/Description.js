import React, { useState } from 'react'
import './Description.css'
import minus from '../../images/icon-minus.svg'
import plus from '../../images/icon-plus.svg'

const Description = () => {
  const [count, setCount] = useState(0);
  const clickMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  const clickPlus = () => {
    setCount(count + 1);
  }


  return (
    <div className="Description">
      <div className="company-name">sneaker company</div>
      <h1 className="product-name">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featureing a durable rubber outer sole.
        they'll withstand everything the weather can offer.
      </p>
      <div className="discount-price">$125.00<span>50%</span></div>
      <div className="original-price">$250.00</div>
      <div className="add-to-cart">
        <div className="counter">
          <div className="minus-container" onClick={clickMinus}>
            <img src={minus} alt="minus" className="minus" />
          </div>
          <div>{count}</div>
          <div className="plus-container" onClick={clickPlus}>
            <img src={plus} alt="plus" className="plus" />
          </div>
        </div>
        <button className="btn-add-to-cart">Add to Cart</button>
      </div>

    </div>
  )
}

export default Description