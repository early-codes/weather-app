import React from 'react'
import './InputDropDown.css'
import { CountryCodes } from '../../../data/CountryCodes'

const InputText = () => {

    const options = CountryCodes.map((country) => {
        return (
            <option key={country.Code} value={country.Code}>{country.Name}</option>
        )
    }
    )

    return (
        <div className="UIcomponent InputDropDownComponent">
            <div className="form__group field">
                <input type="input" list="browsers" className="form__field" placeholder="Country" name="Country" id='Country' />
                <datalist id="browsers">
                    {options}
                </datalist>
                <label htmlFor="Country" className="form__label">Country</label>
            </div>
        </div>
    )
}

export default InputText