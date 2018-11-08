import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header.jsx';
import {Board} from './components/Board.jsx';
import {data} from './data';
//import axios from 'axios';
//import {requests} from './requests'

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

  // componentDidMount () {
  //
  //     // axios.get('https://api.rasp.yandex.net/v3.0/search/?apikey=d09d0468-dda6-4d07-bb6e-943b70b49868&format=json&from=LHR&to=SVO&lang=en_RU&&page=1&date=2018-11-07&system=iata')
  //     //     .then(function (response) {
  //     //         // handle success
  //     //         console.log(response);
  //     //     })
  //     //     .catch(function (error) {
  //     //         // handle error
  //     //         console.log(error);
  //     //     })
  //
  //
  //     // Promise.all(requests)
  //     //     .then(responses => {
  //     //         let results = [];
  //     //         for (let i=0; i<responses.length; i++) {
  //     //             results.push(responses[i].json())
  //     //         }
  //     //         return Promise.all(results)
  //     //     })
  //     //     .then(results => {
  //     //         console.log(results)
  //     //     })
  // }

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