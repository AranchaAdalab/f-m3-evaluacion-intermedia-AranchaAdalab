import React from 'react';
import Pokemon from './Pokemon';
import {pokemon} from '../App';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="pokemonList">
                {pokemon.map(pokemon => {
                    return (
                        <li className="App">
                            <Pokemon
                                key={pokemon.id}
                                name={pokemon.name}
                                photo={pokemon.url}
                                types={pokemon.types.map(pokemonType => {
                                    return (
                                        <li className="pokemonTypes">{pokemonType}</li>
                                    )
                                })}
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default PokeList;