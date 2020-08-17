import React, { Component } from 'react';
//import Messages from './Messages';
import TheDate from './state/TheDate'
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'
import Counter from './state/Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate />
        <HelloWorld />
        <Counter count={123}/>
        <RouletteGun bulletInChamber={8}/>
        <Bomb />
      </div>
      
    );
  }
}

export default App;

//<Messages name="Messages" unread={0}/>
//<Messages name="Notifications" unread={10}/>