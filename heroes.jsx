import React from 'react';

var dataSource = [
  {name: 'Jorge', power:'ninja javascript (?)'},
  {name: 'IronMan', power:'filantropo y super armadura'},
  {name: 'Thor', power:'el martillo '},
  {name: 'Hulk', power:'se pone verde'}
];


class Heroes extends React.Component{
  state = {
    list: []
  };

  componenteDidMount(){
    setTimeOut(function(){
      this.setState({ list : dataSource });
    }.bind(this), 2000);
  }

  render(){

    return ( <ul>
    {
    this.state.list.map(function(heroe, index) {
    return (
    <li key={index}>
                  {heroe.name} the { heroe.power }!
                </li>
    ); })
    }
    </ul> );
  }
};

export default Heroes;
