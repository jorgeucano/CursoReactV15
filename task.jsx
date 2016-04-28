import React from 'react';

class Task extends React.Component{

  static propTypes = {
    name: React.PropTypes.string,
    done: React.PropTypes.bool
  };

  static defaultProps = {
    done: false
  };

  state = {
    update: false,
    name: `Task name is ${this.props.name}`
  };

  handleClick = (event) =>{
    this.setState({updated: true});
  }

  render(){
        return (
            <div>
              <ul>
                {
                  this.state.list.map(function(heroe, index) {
                      return (
                          <li key={index}>{heroe.name} the {heroe.power}!</li>
                          );
                   })
                 }
                </ul>
                <button onClick={this.handleReset}>Reset</button>
              </div>
          );
    
  }
};

export default Task;
