import './App.css';
import { useState } from 'react';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Results from './Components/Results/Results';

type ResultsStateType ={
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const[city, setCity] = useState<string>("");

  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=f0d20bd4bef64149a15165703233004&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => setResults({
      country: data.location.country,
      cityName: data.location.name,
      temperature: data.current.temp_c,
      conditionText: data.current.condition.text,
      icon: data.current.condition.icon
    }))
  }

  return (
    <div className="App">
        <div className='header-com' ><Header /></div>
        <div className='form-com' ><Form  setCity={setCity} getWeather={getWeather} /></div>
        <div className='resuluts-com' ><Results  results={results}/></div>
    </div>
  );
}

export default App;
