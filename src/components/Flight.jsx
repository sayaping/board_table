import React from 'react';

export const Flight = ({ id, arriveOrDeparture, time, city, terminal, status, flightNumber}) => (
    <div className="container">
        <div className="cell id">{id}</div>
        <div className="cell arriveOrDeparture">{arriveOrDeparture}</div>
        <div className="cell time">{time}</div>
        <div className="cell city">{city}</div>
        <div className="cell terminal">{terminal}</div>
        <div className="cell status">{status}</div>
        <div className="cell flightNumber">{flightNumber}</div>
    </div>
);