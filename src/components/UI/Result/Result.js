import React from 'react'
import './Result.css'

const Result = (props) => {

    let tempUnit = ""
    let speedUnit = ""

    if (props.unit.toString() === "metric") {
        tempUnit = <span>&#8451;</span>
        speedUnit = <span> m/s</span>
    } else {
        tempUnit = <span>&#8457;</span>
        speedUnit = <span> mph</span>
    }


    return (
        <div className="UIComponent ResultComponent">
            <div className="cityName">
                <h1>{props.data.responseCity}, {props.data.countryCode}</h1>
            </div>
            <div className="temp dividerDiv">
                <h3>{(props.data.temp) ? <span>Temp: </span> : null}{props.data.temp}{(props.data.temp) ? tempUnit : null}</h3>
                <h5>{(props.data.tempMin) ? <span>Temp Min: </span> : null}{props.data.tempMin}{(props.data.tempMin) ? tempUnit : null}</h5>
                <h5>{(props.data.tempMax) ? <span>Temp Max: </span> : null}{props.data.tempMax}{(props.data.tempMax) ? tempUnit : null}</h5>
            </div>
            <div className="icon dividerDiv">
                <img src={props.data.skyIcon} alt={props.skyDescription} />
                <h4>{props.data.skyDescription}</h4>
            </div>
            <div className="wind dividerDiv">
                <h3>{(props.data.windSpeed) ? <span>Wind Speed: </span> : null}{props.data.windSpeed}{(props.data.windSpeed) ? speedUnit : null}</h3>
                <h3>Wind Direction: {props.data.windDeg}</h3>
            </div>
        </div>
    )
}

export default Result
