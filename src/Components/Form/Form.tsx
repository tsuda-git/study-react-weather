import './Form.css';
import React, { useState } from 'react'

export default function Form() {
  const[city, setCity] = useState<string>("");

  return (
    <div className='from-com'>
      <h2>都市名を英語で入力してください</h2>
      <form>
        <input className='input-text' type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}></input>
        <button className='input-button' type="submit">Get Weather</button>
      </form>
    </div>
  )
}
