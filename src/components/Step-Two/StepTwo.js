import React from 'react'
import arcade from "../../assets/images/icon-arcade.svg"
import advanced from "../../assets/images/icon-advanced.svg"
import pro from "../../assets/images/icon-pro.svg"

const StepTwo = ({nextPage, prevPage }) => {
    return (
        <div>
            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing.</span>
            <div class="plans">
                <div class="plan">
                    <img src={arcade} alt="" />
                    <h3>Arcade</h3>
                    <span>$9/mo</span>
                </div>
                <div class="plan">
                    <img src={advanced} alt="" />
                    <h3>Advanced</h3>
                    <span>$12/mo</span>
                </div>
                <div class="plan">
                    <img src={pro} alt="" />
                    <h3>Pro</h3>
                    <span>$15/mo</span>
                </div>
            </div>
            <div class="buttons">
                <button class="prev" onClick={prevPage}>Go Back</button>
                <button class="next" onClick={nextPage}>Next Step</button>
            </div>
        </div>
    )
}

export default StepTwo