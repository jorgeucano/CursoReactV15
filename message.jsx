
import Hello from './hello-2';

class Message extends React.Component{
  render(){
    return(
      <div>
        <h1> Hello React </h1>
        <Hello name='Jorge' />
      </div>
    );
  }

};

export default Message;
