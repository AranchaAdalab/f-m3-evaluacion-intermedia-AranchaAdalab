import React from 'react';

class Pokemon extends React.Component {
    render() {
      return (
        <div className="App">
            <img src={this.props.photo} className="App-logo" alt="logo" />
            <p className="name">{this.props.name}</p>
            <ul className="types">{this.props.types}</ul>
        </div>
      );
    }
  }

  export default Pokemon;

