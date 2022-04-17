import React, { useEffect, useState } from "react";
import {Planet, PlanetDetails} from './model'
import axios, {AxiosResponse} from 'axios';
import { MdDriveEta } from "react-icons/md";
export const SWAPI_ROUTE = "https://swapi.dev/api/";
export const SWAPI_API_ROUTES = [
  "people",
  "planets",
  "films",
  "species",
  "vehicles",
  "starships"
];

interface Props{
  keyword: string;
  planetDetails: PlanetDetails[];
  // planet: Planet;
  // setPlanet: React.Dispatch<React.SetStateAction<string>>;
  // setPlanetDetails: React.Dispatch<React.SetStateAction<PlanetDetails[]>>;
  // handleAdd: (e: React.FormEvent) => void;
}


const Swapi = ({keyword, planetDetails }: Props) => {
  const [planetData, setPlanetData] = useState<string[]>([]);

  const getPlanets = async (keyword: string) => {
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

  console.log('OUTSIDE ASYNC', indPlanet, keyword);




  return (
    <div>
      <div>
        Swapi
        {planetData &&
          planetData?.forEach((planet: PlanetDetails[]) => {
            <div>
              <span>{indPlanet.name}</span>
              <span>{indPlanet.population}</span>
            </div>

        })}
      </div>

    </div>
  )
}

export default Swapi
