import React from 'react'
import './styles.css'

interface Props{
  planet: string;
  setPlanet: React.Dispatch<React.SetStateAction<string>>;
  // handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({planet, setPlanet}: Props) => {
  return (
    <form className='input'>
      <input
      value= {planet}
      onChange={
        (e)=> setPlanet(e.target.value)
      }
      type='input'
      placeholder='Search A Planet'
      className='input__box'
      />
      <button className='input_submit' type='submit'>
        GO
      </button>

    </form>

  )
}

export default InputField
