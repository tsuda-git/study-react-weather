import './Form.css';

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form(props: FormProps) {
  return (
    <div className='from-com'>
      <h2>都市名を英語で入力してください</h2>
      <form onSubmit={props.getWeather}>
        <input className='input-text' type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}></input>
        <button className='input-button' type="submit">Get Weather</button>
      </form>
    </div>
  )
}
