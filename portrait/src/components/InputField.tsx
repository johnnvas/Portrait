import React, { useRef, useState } from 'react'
import axios, {AxiosResponse} from 'axios';
import './styles.css'

interface Props{
  planet: string;
  setPlanet: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ planet, setPlanet, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [planetData, setPlanetData] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getPlanets = async (planet: string) => {
    const res = await axios(`https://swapi.dev/api/planets/?search=${planet}`);


    setPlanetData(res.data.results);
    return res.data.results;
  };




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
        (e)=> {
          setPlanet(e.target.value)
          getPlanets(e.target.value)
        }
      }
      />
      <button className='input_submit' type='submit'>
        GO
      </button>

    </form>

  )
}

export default InputField
