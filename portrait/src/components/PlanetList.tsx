import React from 'react'
import { Planet } from './model';
import PlanetCard from './PlanetCard'
import "./styles.css";


interface Props{
  planets: Planet[];
  setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>;
}


const PlanetList:React.FC<Props> = ({ planets, setPlanets }: Props) => {
  return (
    <div className='planets'>

      {planets.map(planet => (
        <PlanetCard
          key={planet.id}
          planet={planet}
          planets={planets}
          setPlanets={setPlanets}
        />
      ))}
    </div>
  )
}

export default PlanetList
