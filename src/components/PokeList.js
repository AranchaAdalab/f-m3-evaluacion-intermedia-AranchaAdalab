import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.css';

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
                                types={pokemon.types}
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

PokeList.propTypes = {
    pokemon: PropTypes.array
};

export default PokeList;