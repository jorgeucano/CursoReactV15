import React from 'react';

class Task extends React.Component{

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool
  };

  static defaultProps = {
    done: false
  };

  state = {
    update: false
  };

  render(){
    return (
      <li className={this.props.done ? 'done' : null }>
        {this.props.name}
        {this.state.updated ? <small>Updated...</small> : null }
      </li>
    )
  }
};

export default Task;
