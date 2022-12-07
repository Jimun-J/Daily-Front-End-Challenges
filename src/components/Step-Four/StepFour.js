import React from 'react'

const StepFour = ({ prevPage, nextPage }) => {
    return (
        <div>
            <h1>Finishing up</h1>
            <span>Double-check everything looks OK before confirming</span>
            <div>

            </div>
            <div class="buttons">
                <button class="prev" onClick={prevPage}>Go Back</button>
                <button class="next" onClick={nextPage}>Confirm</button>
            </div>
        </div>
    )
}

export default StepFour