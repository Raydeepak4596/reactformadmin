import React from 'react'

const Addfooddata = () => {
    return (
        <div className='form-outer'>
            <h1>Addfooddata</h1>
            <form className='form-inner'>
                <label>Food Name</label>
                <input type="text" name="food-name"></input>
                <br></br>
                <label>Food Description</label>
                <input type='text' name='food-description'></input>
            </form>
        </div>
    )
}

export default Addfooddata