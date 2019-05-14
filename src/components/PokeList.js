import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="pokemonList">
                {this.props.pokemon.map(pokemon => {
                    return (
                        <li className="pokemonItem" key={pokemon.id}>
                            <Pokemon
                                name={pokemon.name}
                                photo={pokemon.url}
                                types={pokemon.types.map((pokemonType, index) => {
                                    return (
                                        <li className="pokemonTypes" key="{index}">{pokemonType}</li>
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