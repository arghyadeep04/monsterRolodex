
import './App.css';

import React from 'react';
import { Component } from 'react';
import CardList from './components/CardList.component';
import Searchbox from './components/Searchbox.component';
class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[
        
      ],
      search:"",
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      response.json()
      .then(obj=>{
        this.setState({
          monsters:obj
        })
      })
    })
  }

  handleChange=(e)=>{
    this.setState({
      search:e.target.value
    },()=>{console.log(this.state)})
  }

  render(){
  return (
    <div className="App">
      <h1 className="p-3 text-blue-400 text-3xl">Monster_Rolodex</h1>
      <Searchbox placeholder={"search monster"} handleChange={this.handleChange}/>
      <CardList monsters={this.state.monsters} filter={this.state.search}/>
    </div>
  );
  }
}

export default App;
