import React from 'react'
import './RoundSlider.css'

const RoundSlider = () => {

    const switchChangeHandler = (event) => {
        console.log(event.target.checked)
    }

    return (
        <div className="UIcomponent RoundSliderComponent">
            <label className="switch">
                <input type="checkbox" id="togBtn" onChange={switchChangeHandler} />
                <div className="slider round"></div>
            </label>
        </div>
    )
}

export default RoundSlider