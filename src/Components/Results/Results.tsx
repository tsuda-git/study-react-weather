import './Results.css';

type ResultsPropsType = {
  results:{
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}

function Results(props:ResultsPropsType) {
  return (
    <div className='resultus-com'>
      {props.results.country && <h2 className='country-name'>{props.results.country}</h2>}
      {props.results.cityName && <h2 className='city-name'>{props.results.cityName}</h2>}
      {props.results.temperature && <h2 className='temperature'>{props.results.temperature}℃</h2>}
      {props.results.conditionText && <h2 className='weather'><img src={props.results.icon} alt="icon"></img><span>{props.results.conditionText}</span></h2>}
    </div>
  )
}

export default Results