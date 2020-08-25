import React, { Component } from 'react';
//import Messages from './Messages';
import TheDate from './state/TheDate'
//import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
//import RouletteGun from './state-drills/RouletteGun'
//import Counter from './state/Counter'
import Tabs from './state/Tabs'
import Accordion from './state-drills/Accordion'
import AddItemForm from './Callback-drill/AddItemForm';
import ShoppingList from './Callback-drill/ShoppingList';
import DemonynApp from './demonymapp/demonymApp';
//import Promises from './promises'
import './App.css';

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const accordArray = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

class App extends Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      {name: itemName, checked: false}
    ]
    this.setState({
      shoppingItems:newItems
    })
  }

  render() {
    return (
      <div className="App">
        <TheDate />
        <Accordion sections={accordArray} />
        <Bomb />
        <Tabs tabs={tabsProp} />
        <DemonynApp/>
        
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList 
            items={this.state.shoppingItems}
          
            onDeleteItem={this.handleDeleteItem}
            onCheckItem={this.handleCheckItem} 
            />
          </section>
        </main>
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