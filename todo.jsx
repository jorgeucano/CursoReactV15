import React from 'react';
import Task from './task';

class ToDo extends React.Component{
  render(){
    return(
      <ul>
        <Task name='Introduccion' done />
        <Task name='Entendiendo los controladores' done />
        <Task name='HTML y Controladores' done />
        <Task name='Propiedades' done={false} />
        <Task />
      </ul>
    )
  }
};
export default ToDo;
