import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList, Cardlist} from './component/card-list/card-list.component';
import { Component } from 'react';
import{Searchbox} from './component/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:''
  
    };

    this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({monsters:users}));
  }
  handleChange = e =>{
    this.setState({searchField:e.target.value});
  }
  render(){
    const{ monsters,searchField }=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox
           placeholder='Search Monsters'
           handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>   
    </div>
    );
  }
}

export default App;
