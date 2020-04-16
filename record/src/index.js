import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Products(props) {
  return <div>
    <p>
    {props.title}
    <span class="price">{props.price}</span>
    </p>
   </div>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {title: 'Кресло', price: 100},
        {title: 'Диван', price: 500},
        {title: 'Комод', price: 300},
      ]};
  }
  
  
  render() {
    let items = [];
    for(let i = 0; i < this.state.products.length; i++) {
        items.push(
          <Products 
          title = {this.state.products[i].title} 
          price = {this.state.products[i].price}
          />
        )
      } 
    return <div>
        {items}
      </div>
  }
}

render(<App />, document.getElementById('root'));
