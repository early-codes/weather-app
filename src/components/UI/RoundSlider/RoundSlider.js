import React, { createRef, useEffect } from 'react'
import './RoundSlider.css'

const RoundSlider = (props) => {

    let unit = ""

    const switchRef = createRef()


    const onOffToUnitParser = (onOff) => {
        switch (onOff) {
            case true:
                return "imperial"
            default:
                return "metric"
        }
    }

    const switchChangeHandler = (event) => {
        unit = onOffToUnitParser(event.target.checked);
        props.getUnit(unit);
    }

    useEffect(() => {
        unit = onOffToUnitParser(switchRef.current.checked);
        props.getUnit(unit);
    })

    return (
        <div className="UIcomponent RoundSliderComponent">
            <label className="switch">
                <input ref={switchRef} type="checkbox" id="togBtn" onChange={switchChangeHandler} />
                <div className="slider round"></div>
            </label>
        </div>
    )
}

export default RoundSlider