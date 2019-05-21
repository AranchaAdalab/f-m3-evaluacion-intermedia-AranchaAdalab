import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.css';

class PokeList extends React.Component {
    render() {
        return (
            <ul className="pokemonList">
                {this.props.pokemon.map(poke => {
                    return (
                        <li className={`pokemonItem ${this.props.favPokemon.includes(poke.id) ? 'pokemonFav' : 'anything'}`} id={poke.id} key={poke.id} onClick={this.props.actionToFav}>
                            <Pokemon
                                name={poke.name}
                                photo={poke.url}
                                types={poke.types}
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