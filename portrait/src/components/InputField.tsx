import React, { useRef } from 'react'
import axios, {AxiosResponse} from 'axios';
import './styles.css'

interface Props{
  planet: string;
  setPlanet: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ planet, setPlanet, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getPlanets = async (planet: string) => {
    const res = await axios(`https://swapi.dev/api/planets/?search=${planet}`);
    console.log('HEEEERREEEEEEEEE', res.data);
    // return res;
    // setData(res.data);
  };

  // const getPlanets = async (): Promise<Array<Planet> | string> => {
  //   const api = `https://swapi.dev/api/planets?search=r2`
  //   const res = await axios(api);
  //     // const response = await fetch(api)
  //   console.log('HEEEERREEEEEEEEE', res.data);
  //     // const { data } = await res.json()
  //     // return data

  // }

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
