import React from 'react';

class Task extends React.Component{
  render(){
    return (
      <li>
        <input type='checkbox' checked={this.props.done ? 'checked' : null } />
        {this.props.name}
      </li>
    )
  }
};

export default Task;
