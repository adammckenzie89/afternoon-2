import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';



class App extends Component {
  constructor(){
    super();

      this.state = {
        person: data,
        index: 0
      };  
    }
    handleClick =() => {
      this.setState({ index: this.state.index + 1})
    }
    handlePrevious = () => {
      if(this.state.index > 0) {
        return this.setState({ index: this.state.index - 1})
      }
    }
    nextClick = () => {
      this.setState({index: (this.state.index + 1) % 25})
    }
  
  render() {
    let person = this.state.person[this.state.index]
    return (

      <div>
        <header className="header">
        <h1 className='Home'>Home</h1>
        </header>
        <div className="center-box">
        <h1 className='person'>{person.name.first} {person.name.last}</h1>
        
        <h1><strong>from: </strong> {person. city} {person. country}</h1>
        <h1><strong>Job title: </strong>{person.title}</h1>
        <h1><strong>Employer: </strong>{person.employer}</h1>
        <h1><strong>Favorite Movies: </strong></h1>
        <ul>
        <li>{person.favoriteMovies[0]}</li>
        <li>{person.favoriteMovies[1]}</li>
        <li>{person.favoriteMovies[2]}</li>
        </ul>
        <button onClick={this.handleClick} className='number'> {person.id} /25 </button>
        </div>
        <button onClick={this.handlePrevious} className='previous'>{ '< Previous' }</button>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
        <button className='new'>New</button>
        <button onClick={this.nextClick} className='next'>Next ></button>
      </div>
    );
  }
}

export default App;
