import React from 'react';
import {Search} from './Search.jsx'

export const Header = ({setFilter, filter, input, setInput, setIsSearch}) => (
    <div className="buttons-container">
        <div className={"button Arr " + (filter===1 && !input ? "active" : "inactive")} onClick={() => setFilter(1)}>Arrivals</div>
        <div className={"button Dep " + (filter===2 && !input ? "active" : "inactive")} onClick={() => setFilter(2)}>Departures</div>
        <div className={"button Del " + (filter===3 && !input ? "active" : "inactive")} onClick={() => setFilter(3)}>Delayed</div>
        <Search setInput = {setInput} setIsSearch = {setIsSearch} input ={input}/>
    </div>
);