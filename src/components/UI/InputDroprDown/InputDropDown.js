import React, { useRef } from 'react'
import './InputDropDown.css'
import { CountryCodes } from '../../../data/CountryCodes'

const InputText = (props) => {

    let countryCode = ""

    const onChangeHandler = (event) => {
        setTimeout(() => {
            countryCode = event.target.value
            props.getCountryCode(countryCode)
        }, 2000);
    }


    const options = CountryCodes.map((country) => {
        return (
            <option key={country.Code.toLowerCase()} value={country.Code.toLowerCase()} >{country.Name}</option>
        )
    }
    )

    return (
        <div className="UIcomponent InputDropDownComponent">
            <div className="form__group field">
                <input
                    type="input"
                    list="countries"
                    className="form__field"
                    placeholder="Country"
                    name="Country"
                    id='Country'
                    onChange={onChangeHandler}
                />
                <datalist id="countries">
                    {options}
                </datalist>
                <label htmlFor="Country" className="form__label">Country</label>
            </div>
        </div>
    )
}

export default InputText