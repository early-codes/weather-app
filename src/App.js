import './App.css';
import RoundedSlider from './components/UI/RoundSlider/RoundSlider'
import InputText from './components/UI/InputText/InputText'
import InputDropDown from './components/UI/InputDroprDown/InputDropDown'
import { useEffect, useState } from 'react';
import Result from './components/UI/Result/Result';


function App() {

  const [unit, setUnit] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [city, setCity] = useState("")
  const [responseData, setResponseData] = useState({})


  const unitGetter = (_unit) => {
    setUnit(_unit)
  }

  const countryCodeGetter = (_countryCode) => {
    setCountryCode(_countryCode)
  }

  const cityGetter = (_city) => {
    setCity(_city)
  }

  const responseDataFiller = async (_response, response) => {
    if (_response.status === 200) {
      return ({
        skyIcon: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
        skyDescription: response.weather[0].description,
        windSpeed: response.wind.speed,
        windDeg: response.wind.deg,
        temp: response.main.temp,
        responseCity: response.name,
        countryCode: response.sys.country,
        tempMin: response.main.temp_min,
        tempMax: response.main.temp_max
      })
    }

  }

  const apiHandler = async (countryCode, city, unit) => {
    const _response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city || "istanbul"},${countryCode || "tr"}&APPID=API_KEY_HERE&units=${unit || "metric"}`)
    const response = await _response.json()
    setResponseData(await responseDataFiller(_response, response))
  }


  useEffect(() => {
    apiHandler(countryCode, city, unit)
  }, [countryCode, city, unit])

  return (
    <div className="App">
      <InputDropDown getCountryCode={countryCodeGetter} fillCountryCode={countryCode} />
      <InputText getCity={cityGetter} />
      <RoundedSlider getUnit={unitGetter} />
      {(responseData && responseData.responseCity) ? <Result data={responseData} unit={unit} /> : null}
    </div>
  );
}

export default App;
