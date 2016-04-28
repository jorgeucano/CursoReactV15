import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task';
import Tasks from './tasks';

class ToDo extends React.Component{

  ComponentDidMount(){
    const el = ReactDOM.findDOMNode(this.refs.first);
    console.log(el);
  }

  render(){
    return(
      <ul>
        <Tasks>
          <Task name='Introduccion' done />
          <Task name='Entendiendo los controladores' done />
          <Task name='HTML y Controladores' done />
          <Task name='Propiedades' done={false} />
          <Task />
        </Tasks>
      </ul>
    )
  }
};
export default ToDo;
