import React from 'react'
import { Planet,  PlanetDetails } from './model';
import PlanetCard from './PlanetCard'
import "./styles.css";


interface Props{
  planets: Planet[];
  planetDetails: PlanetDetails[];
  setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>;
  setPlanetDetails: React.Dispatch<React.SetStateAction<PlanetDetails[]>>;
}


const PlanetList:React.FC<Props> = ({ planets, setPlanets, planetDetails, setPlanetDetails }: Props) => {


  return (
    <div className='planets'>

      {planets.map(planet => (
        <PlanetCard
          key={planet.id}
          planet={planet}
          planets={planets}
          setPlanets={setPlanets}
          planetDetails={planetDetails}
          setPlanetDetails={setPlanetDetails}
        />
      ))}
    </div>
  )
}

export default PlanetList
