import React from 'react';

class Link extends React.Component{

  handleClick = (event) => {
    event.preventDefault();
    alert('eu me clickeaste');
  };

  render(){
    return( <a href={this.props.url} onClick={this.handleClick}>
              <label>{this.props.caption}</label>
            </a>
    )
  }
}
export default Link;
