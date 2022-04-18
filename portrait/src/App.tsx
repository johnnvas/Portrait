import React, {useState} from 'react';
import {Planet, PlanetDetails} from './components/model'
import InputField from './components/InputField'
import PlanetList from './components/PlanetList';
import Swapi from './components/Swapi';
import './App.css';

const App: React.FC =() =>{
   const [planet, setPlanet] = useState<string>('');
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [planetDetails, setPlanetDetails] = useState < PlanetDetails[]>([])

   const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (planet) {
      setPlanets([...planets, {id: Date.now(), planet, alreadyChosen: false}]);
      setPlanet('');
    }
   }


  return (
    <div className='App'>
      <span className="heading">Star Wars</span>
      <InputField planet={planet} setPlanet={setPlanet} handleAdd={handleAdd} />
      <PlanetList planets={planets} setPlanets={setPlanets} planetDetails={planetDetails} setPlanetDetails={setPlanetDetails} />
      {/* <Swapi planet={planet} setPlanet={setPlanet} planetDetails={planetDetails}  setPlanetDetails={ setPlanetDetails} handleAdd={handleAdd} /> */}
    </div>
  );
}

export default App;
