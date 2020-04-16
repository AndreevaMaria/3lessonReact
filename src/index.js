import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Record from './Record.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
constructor() {
  super();
  this.state = {
    pageTitle: "Главная!",
    records: [
      {
        title: 'Заголовок 1',
        message: 'Сообщение 1'
      },
      {
        title: 'Заголовок 2',
        message: 'Сообщение 2'
      },
      {
        title: 'Заголовок 3',
        message: 'Сообщение 3'
      },
    ],
    text: 'Start editing to see some magic happen :)',
    arr: ['Молоко', 'Хлеб', 'Сахар'] 
  }
}

  render() {
    let items = [];
    for(let i = 0; i < this.state.arr.length; i++) {
      items.push(<li> {this.state.arr[i]} </li>)
    }
    let items__rec = [];
    for(let i = 0; i < this.state.records.length; i++) {
      items__rec.push(<Record 
      title={this.state.records[i].title} 
      message={this.state.records[i].message}
      />)
    }

    return <div>
      <Header page={this.state.pageTitle}/>
      
      <Header page="О нас"/>
      <Header page="Карта"/>
       
       {items__rec}

      <Record title={this.state.records[0].title} 
      message={this.state.records[0].message}/>
      <Record title={this.state.records[1].title} 
      message={this.state.records[1].message}/>
      <Record title={this.state.records[2].title} 
      message={this.state.records[2].message}/>

      <Record title='Заголовок 1' message='Сообщение 1'/>
      <Record title='Заголовок 2' message='Сообщение 2'/>
      <Record title='Заголовок 3' message='Сообщение 3'/>

      <p>{this.state.text}</p>
      {items}

      <p>{this.state.arr[0]}</p>
      <p>{this.state.arr[1]}</p>
      <p>{this.state.arr[2]}</p>
      <br/>
      {Footer}
    </div>
  }
}

render(<App/>, document.getElementById('root'));


