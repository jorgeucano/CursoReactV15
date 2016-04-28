import React from 'react';

var dataSource = [
  {name: 'Jorge', power:'ninja javascript (?)'},
  {name: 'IronMan', power:'filantropo y super armadura'},
  {name: 'Thor', power:'el martillo '},
  {name: 'Hulk', power:'se pone verde'}
];


class Heroes extends React.Component{
  state = {
    list: [  {name: 'Jorge', power:'ninja javascript (?)'},
      {name: 'IronMan', power:'filantropo y super armadura'},
      {name: 'Thor', power:'el martillo '},
      {name: 'Hulk', power:'se pone verde'}]
  };

  fetchData = () =>{
    setTimeout(function(){
      this.setState({ list : dataSource });
    }.bind(this), 2000);
  }

  handleReset = () =>{
    this.setState({list: []});
  }

  handleFetch = () => {
    this.fetchData();
  }

  componenteDidMount(){
    this.fetchData();
  }

  render(){
    if (!this.state.list.length) {
      return ( <div>
      No list!
      <br />
      <button onClick={this.handleFetch}>Fetch</button>
      </div> );
    }
    else {
      return (
        <div>
          <ul>
          
          </ul>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    }
  }
};

export default Heroes;
