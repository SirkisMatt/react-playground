import React, { Component } from 'react';
//import Messages from './Messages';
import TheDate from './state/TheDate'
//import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
//import RouletteGun from './state-drills/RouletteGun'
//import Counter from './state/Counter'
import Tabs from './state/Tabs'
import './App.css';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate />
        <Bomb />
        <Tabs tabs={tabsProp} />
      </div>
      
    );
  }
}

export default App;

//<Messages name="Messages" unread={0}/>
//<Messages name="Notifications" unread={10}/>
/*<HelloWorld />
<Counter count={123}/>
<RouletteGun bulletInChamber={8}/>*/