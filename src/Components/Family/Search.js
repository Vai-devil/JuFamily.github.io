import React from 'react';
import './Search.css';


const SearchBox = ({ searchfield, onsearchchange }) => {
    return (
        <div className="search">
            <input type="search" placeholder="Enter Your Name" onChange={onsearchchange} />
        </div>
    );
}



export default SearchBox;