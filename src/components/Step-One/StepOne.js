import React from 'react'

const StepOne = ({ nextPage }) => {
    return (
        <div>
            <h1>Personal info</h1>
            <span>Please provide your name, email address, and phone number.</span>
            <form>
                <label for="name">Name</label><br />
                <input type="text" name="name" placeholder="Stephen King" /><br />
                <label for="email">Email Address</label><br />
                <input type="email" name="email" placeholder="stephenking@lorem.com" /><br />
                <label for="phone">Phone Number</label><br />
                <input type="text" name="phone" placeholder="+1 234 567 890" /><br />
            </form>
            <div class="buttons">
                <button class="prev" style={{ visibility: 'hidden' }}>Go Back</button>
                <button class="next" onClick={nextPage}>Next Step</button>
            </div>
        </div>
    )
}

export default StepOne