import React from 'react';

class Task extends React.Component{

  static propTypes = {
    name: React.PropTypes.string,
    done: React.PropTypes.bool
  };

  static defaultProps = {
    name: 'Unknown task',
    done: false
  };

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
