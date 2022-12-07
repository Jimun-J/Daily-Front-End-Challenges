import React from 'react'

const StepThree = ({ prevPage, nextPage }) => {
  return (
    <div>
      <h1>Pick add-ons</h1>
      <span>Add-ons help enhance your gaming experience.</span>
      <form>
        <div className="checkbox">
          <input type="checkbox" name="service" />
          <div className="text-wrap">
            <label for="service">Online Service</label>
            <span>Access to multiplayer games</span>
          </div>
          <div className="price">+$1/mo</div>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="service" />
          <div className="text-wrap">
            <label for="service">Larger Storage</label>
            <span>Extra 1TB of cloud save</span>
          </div>
          <div className="price">+$2/mo</div>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="service" />
          <div className="text-wrap">
            <label for="service">Customizable Profile</label>
            <span>Custom theme on your profile</span>
          </div>
          <div className="price">+$2/mo</div>
        </div>
      </form>
      <div class="buttons">
        <button class="prev" onClick={prevPage}>Go Back</button>
        <button class="next" onClick={nextPage}>Next Step</button>
      </div>
    </div>
  )
}

export default StepThree