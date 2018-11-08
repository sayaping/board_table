import React from 'react';

export const Search = ({setInput, setIsSearch, input}) => (
            <form className="button containerSearch">
                <input
                    className="inputSearch"
                    placeholder=" Start typing flight number here.."
                    onChange={e =>setInput(e.target.value)}
                    value={input}
                />
            </form>
);