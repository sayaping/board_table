import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header.jsx';
import {Board} from './components/Board.jsx'
import {data} from './data'


const filterFlights = (filter) => {
    switch(filter) {

        case 1: return (data.filter(item => item.arriveOrDeparture==='arriving'));
            break;

        case 2: return (data.filter(item => item.arriveOrDeparture==='departing'));
            break;

        case 3: return (data.filter(item => item.status==='delayed'));
            break
    }
};


class App extends Component {
  state = {
    filter: 1,
    input: '',
  };



  handleFlight = () => {
      const {filter, input}=this.state;
      if (input) {
          return (data.filter(item => item.flightNumber.includes(input)));
      }
      else {
          return filterFlights(filter)
      }

  };

  setFilter = (filter, input) => {
    this.setState({
        input: '',
        filter
    })
  };

  setInput = (input) => {
    this.setState({
        input
    })
  };

  setIsSearch = () => {
      this.setState ({
          isSearch: true
      })
  };

  render() {
    const {filter, input}=this.state;
    return (
      <div className="App">
        <Header setFilter = {this.setFilter} setInput={this.setInput} setIsSearch = {this.setIsSearch} filter = {filter} input = {input}/>
        <Board flights = {this.handleFlight()} />
      </div>
    );
  }
}

export default App;