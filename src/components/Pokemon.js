import React from 'react';

class Pokemon extends React.Component {
    render() {
      return (
        <div>
            <img src={this.props.photo} className="App-logo" alt="logo" />
            <p className="name">{this.props.name}</p>
            <ul className="types">{this.props.types}</ul>
        </div>
      );
    }
  }

  export default Pokemon;

  //con destructuring

  // class Pokemon extends React.Component {
  //   render() {
  //     const {name, photo, types} = this.props;
  //     return (
  //       <div>
  //           <img src={photo} className="App-logo" alt="logo" />
  //           <p className="name">{name}</p>
  //           <ul className="types">{types}</ul>
  //       </div>
  //     );
  //   }
  // }

