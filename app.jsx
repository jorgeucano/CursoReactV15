import React from 'react';
import reactDOM from 'react-dom';
import Message from './message';
import Link from './link';

class App extends React.Component{
  render(){
    const url = 'https://github.com/jorgeucano/CursoReactV15/';

    return(
      <div>
        <Message />
        <nav>
          <Link url={url} caption="My github" />
          <Link url='https://twitter.com/jorgeucano' caption="My Twitter" />
        </nav>
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('container'));
