import React from 'react'
import './InputText.css'

const InputText = (props) => {

    let city = ""

    const onChangeHandler = (event) => {
        setTimeout(() => {
            city = event.target.value
            props.getCity(city)
        }, 3000);
    }

    return (
        <div className="UIcomponent InputTextComponent">
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="City" name="City" id='City' onChange={onChangeHandler} />
                <label htmlFor="City" className="form__label">City or Province</label>
            </div>
        </div>
    )
}

export default InputText