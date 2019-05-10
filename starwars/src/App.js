import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {/* <h2 className="names">{this.state.starwarsChars.map(sec=>{
        console.log(sec)
        return "name: " + sec.name + " " })} </h2> */}

        <h2 className= "names">names</h2>
        <div>{
          this.state.starwarsChars.map(sec=>{
              console.log(sec)
              return <div className="people"> {sec.name} </div>  
            }
          )
        }</div>
      </div>
    );
  }
}

export default App;
