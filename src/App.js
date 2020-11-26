import './App.css';
import RoundedSlider from './components/UI/RoundSlider/RoundSlider'
import InputText from './components/UI/InputText/InputText'
import InputDropDown from './components/UI/InputDroprDown/InputDropDown'

function App() {
  return (
    <div className="App">
      <InputDropDown />
      <InputText />
      <RoundedSlider />
    </div>
  );
}

export default App;
