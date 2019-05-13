import React from 'react';
import Pokemon from './Pokemon';
import {pokemon} from '../App';

class PokeList extends React.Component {
    render() {
        return (
            <ul>
                {pokemon.map(pokemon => {
                    return (
                        <li>
                            <Pokemon
                                key={pokemon.id}
                                name={pokemon.name}
                                photo={pokemon.url}
                                types={pokemon.types.map(pokemonType => {
                                    return (
                                        <li>{pokemonType}</li>
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