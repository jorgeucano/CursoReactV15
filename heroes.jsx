import React from 'react';

class Heroes extends React.Component{
  state = {
    list: []
  };

  render(){
    if (!this.state.list.length){
      return (<div>No Heroes!</div>);
    }

    return (
      <ul>
        this.state.list.map(function(heroe, index)) {
          return(
            <li key={index}>
              {heroe.name} the {heroe.power}!
            </li>
          );
        }
      </ul>
    );
  }
};

export default Heroes;
