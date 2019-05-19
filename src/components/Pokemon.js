import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, photo, types} = this.props;
    return (
      <div>
        <img src={photo} className="photo" alt={name} />
        <p className="name">{name}</p>
        <ul className="types">{types.map((pokemonType, index) => {
          return (
            <li className="pokemonTypes" key={index}>{pokemonType}</li>
          )
        })}</ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  types: PropTypes.array
};

export default Pokemon;
