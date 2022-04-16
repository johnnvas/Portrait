import React, {useState} from 'react';
import InputField from './components/InputField'
import {Planet} from './components/model'
import './App.css';

const App: React.FC =() =>{
   const [planet, setPlanet] = useState<string>('');
   const [planets, setPlanets]= useState<Planet[]>([]);

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

      <InputField planet={planet} setPlanet={setPlanet}/>
    </div>
  );
}

export default App;
