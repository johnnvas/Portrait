import React, { useRef } from 'react'
import './styles.css'

interface Props{
  planet: string;
  setPlanet: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ planet, setPlanet, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
      }
    }>
      <input
      ref={inputRef}
      value= {planet}
      type='input'
      placeholder='Search A Planet'
      className='input__box'
      onChange={
        (e)=> setPlanet(e.target.value)
      }
      />
      <button className='input_submit' type='submit'>
        GO
      </button>

    </form>

  )
}

export default InputField
