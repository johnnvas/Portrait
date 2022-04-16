import React from 'react'
import { Planet } from './model';
import "./styles.css";


interface Props{
  planets: Planet[];
  setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>;
}


const PlanetList:React.FC<Props> = ({ planets, setPlanets }: Props) => {
  return (
    <div className='planets'>
      {planets.map((planet) => (
        <li>{planet.planet}</li>
      ))}
    </div>
  )
}

export default PlanetList
