import React, { useEffect, useState } from "react";
import {Planet, PlanetDetails} from './model'
import axios, {AxiosResponse} from 'axios';
import { MdDriveEta } from "react-icons/md";
import "./styles.css";


const Swapi = ({keyword }) => {
  const [planetData, setPlanetData] = useState([]);

  const getPlanets = async (keyword) => {
    const res = await axios(`https://swapi.dev/api/planets/?search=${keyword}`);
    console.log('HEEEERREEEEEEEEE', res.data.results);

    setPlanetData(res.data.results);
    return res.data.results;
  };

  useEffect(() => {
    getPlanets(keyword)
  }, [keyword])
  // getPlanets(keyword)

  const indPlanet = planetData[0]

  console.log('OUTSIDE ASYNC', planetData, keyword);
  // console.log('OUTSIDE ASYNC22222', planetData[0].climate);




  return (
    <div>
      <div className='API'>
        {keyword}
        {planetData &&
          planetData?.map(planet => (
            // console.log('INSIDE ASYNC', planet.climate);
            <div>
              <li>Rotation Period: {planet.rotation_period}</li>
              <li>Orbital Period: {planet.orbital_period}</li>
              <li>Diameter: {planet.diameter}</li>
              <li>Climate: {planet.climate}</li>
              <li>Gravity: {planet.gravity}</li>
              <li>Terrain: {planet.terrain}</li>
              {/* <li>Surface Water: {planet.surface_water}</li>
              <li>Population: {planet.population}</li>
              <li>Residents: {planet.residents}</li>
              <li>Films : {planet.films}</li>
              <li>Created: {planet.created}</li>
              <li>Edited: {planet.edited}</li>
              <li>Url: {planet.url}</li> */}
            </div>

        ))}
      </div>

    </div>
  )
}

export default Swapi
