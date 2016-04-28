import React from 'react';

class Count extends React.Component{
  state = {
    count = this.props.total
  }

  handleClick = (event) => {
    this.setState({count: this.state.count + 1 });
  }

  render (){
    return <small onClick={this.handleClick}>{this.state.count}</small>
  }
}
export default Count;

/*
Como vemos simplemente inicializamos el atributo de estado count con la propiedad total.
Este atributo de estado puede que vaya acumulando nuevos valores, tantas veces como el usuario haga click sobre el
 componente llamaremos a la callback handleClick la cual modificará el estado con this.setState.
Para finalizar con este capítulo solo quiero que te quedes con una pequeña formula para no caer en el Source of Truth:
render() {
const name = `Task name is ${this.props.name}`; ...
Estados 29
1 var state_attribute = props_attribute != future_state_attribute ? true : false;
*/
