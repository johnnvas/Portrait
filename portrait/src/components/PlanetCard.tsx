import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Planet } from './model'
import './styles.css'

interface Props {
  planet: Planet,
  planets: Planet[],
  setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>
}


const PlanetCard = ({ planet, planets, setPlanets }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editPlanet, setEditPlanet] = useState<string>(planet.planet);

  const handleDone = (id: number) => {
    setPlanets(planets.map(p => {
      if (p.id === id) {
        p.alreadyChosen = !p.alreadyChosen
      }
      return p
    }))
  }

  const handleDelete = (id: number) => {
    setPlanets(planets.filter(p => {
      if (p.id !== id) {
        return p
      }
    }))
  }

   const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setPlanets(planets.map(p => (
      planet.id === id ? { ...planet, planet: editPlanet } : p
    )))
    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

return (
    <form className='planets__single' onSubmit={(e) => handleEdit(e, planet.id)}>
      {
        edit ? (
          <input
            ref={inputRef}
            value={editPlanet}
            onChange={(e) => setEditPlanet(e.target.value)}
            className='planets__single--text'
          />
        ) : (
          planet.alreadyChosen ? (
            <s className="planets__single--text">
              {planet.planet}
            </s>

          ) : (
            <span className="planets__single--text">
              {planet.planet}
            </span>

          )

        )
      }

      <div>
        <span className="icon" onClick={() => {
          if (!edit && !planet.alreadyChosen) {
            setEdit(!edit)
          }
        }
        }>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(planet.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(planet.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default PlanetCard
