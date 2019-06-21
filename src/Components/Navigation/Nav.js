import React from 'react';
import './Nav.css';

const Nav = ({ onfamilyclick, onloadfetch }) => {

    return (
        <div className="Navbar">
            <ul>
                <li><p onClick={() => onfamilyclick('home') && onloadfetch()}>Home</p></li>
                <li><p onClick={() => onfamilyclick('family') && onfetc}>Family</p></li>
                <li><p onClick={() => onfamilyclick('add-family')}>Join Family</p></li>
            </ul>
        </div>
    );
}

export default Nav;
