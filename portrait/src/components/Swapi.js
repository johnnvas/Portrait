import React, { useEffect, useState } from "react";
import {Planet, PlanetDetails} from './model'
import axios, {AxiosResponse} from 'axios';
import { MdDriveEta } from "react-icons/md";
import "./styles.css";


const Swapi = ({keyword }) => {
  const [planetData, setPlanetData] = useState([]);

  const getPlanets = async (keyword) => {
    const res = await axios(`https://swapi.dev/api/planets/?search=${keyword}`);

    setPlanetData(res.data.results);
    return res.data.results;
  };

  useEffect(() => {
    getPlanets(keyword)
  }, [keyword])
  // getPlanets(keyword)

  const indPlanet = planetData[0]





  return (
    <div>
      <div className='.planets__single--text'>
        {keyword}
        {planetData &&
          planetData?.map(planet => (
            <div>
              <li>Rotation Period: {planet.rotation_period}</li>
              <li>Diameter: {planet.diameter}</li>
              <li>Orbital Period: {planet.orbital_period}</li>
              <li>Climate: {planet.climate}</li>
              <li>Gravity: {planet.gravity}</li>
              <li>Terrain: {planet.terrain}</li>
              <li>Surface Water: {planet.surface_water}</li>
              <li>Population: {planet.population}</li>
              <li>Created: {planet.created}</li>
              <li>Edited: {planet.edited}</li>
              <li>Url: {planet.url}</li>
              {/* <li>Films : {planet.films}</li> */}
              {/* <li>Residents: {planet.residents}</li> */}
            </div>

        ))}
      </div>

    </div>
  )
}

export default Swapi
