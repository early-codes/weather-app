import React from 'react'
import './InputText.css'

const InputText = () => {

    return (
        <div className="UIcomponent InputTextComponent">
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="City" name="City" id='City' />
                <label htmlFor="City" className="form__label">City</label>
            </div>
        </div>
    )
}

export default InputText