import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import {pokemon} from './components/PokeArray';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemon,
      favPokemon: []
    }
    this.handleClickFav = this.handleClickFav.bind(this);
  }

  handleClickFav(event) {
    const gilty = parseInt(event.currentTarget.id);
    this.setState((prevState) => {
      if (prevState.favPokemon.indexOf(gilty) < 0) {
        const newFavorites = [...prevState.favPokemon, gilty]
        return(
          {favPokemon: newFavorites}
        )
      } else {
        return (
          {favPokemon: prevState.favPokemon.filter(item => item !== gilty)}
        )
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Mi lista de Pokémon</h1>
        <PokeList pokemon={this.state.pokemon} favPokemon={this.state.favPokemon} actionToFav={this.handleClickFav} />
      </div>
    );
  }
}

export default App;
