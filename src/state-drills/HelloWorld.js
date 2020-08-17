import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'World!'
    };
    handleClickFriend = () => {
        console.log(this.state.who)
        this.setState({
            who: "Friend!"
        })
    }
    handleClickReact = () => {
        this.setState({
            who: "React!"
        })
    }
    handleClickWorld = () => {
        this.setState({
            who: "World!"
        })
    }
    
    render() {
      return (
        <div className="HelloWorld">
          <p>Hello, {this.state.who}</p>
          <button onClick={this.handleClickWorld}>World</button>
          <button onClick={this.handleClickFriend}>Friend</button>
          <button onClick={this.handleClickReact}>React</button>
        </div>
        
      );
    }
  }
  
  export default HelloWorld;