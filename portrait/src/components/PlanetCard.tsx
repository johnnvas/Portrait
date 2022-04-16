import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Planet } from './model'

interface Props {
  planet: Planet,
  planets: Planet[],
  setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>
}


const PlanetCard: React.FC = () => {
  return (
    <div>
      ---
    </div>
  )
}

export default PlanetCard
