import React from 'react';

class Task extends React.Component{

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool
  };

  static defaultProps = {
    name: 'Unknown task',
    done: false
  };

  render(){
    return (
      <li className={this.props.done ? 'done' : null }>
        {this.props.name}
      </li>
    )
  }
};

export default Task;
