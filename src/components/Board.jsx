import React from 'react'
import {Flight} from './Flight'

export const Board = ({flights}) => (
    <div className="mainContainer">
        {flights.map(flight => (
             <div className="fly" key = {flight.id}>
                <Flight
                    id = {flight.id}
                    arriveOrDeparture ={flight.arriveOrDeparture}
                    time = {flight.time}
                    city = {flight.city}
                    terminal = {flight.terminal}
                    status = {flight.status}
                    flightNumber = {flight.flightNumber}
                />
            </div>
            )
          )
        }
    </div>
);