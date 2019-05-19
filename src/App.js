import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import {pokemon} from './components/PokeArray';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Mi lista de Pokémon</h1>
        <PokeList pokemon={pokemon}/>
      </div>
    );
  }
}

export default App;
