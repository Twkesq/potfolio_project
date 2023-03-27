import React from 'react';
import "./NavBar.css";
const NavBar = () => {
    return (
        <div className="nav_bar">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="src/UI/NavBar#" className="logo_navbar">Ol-Kuz</a>
            <ul className="list_nav">
                <li className="list_item_nav"><a href="src/UI/NavBar#!">Home</a></li>
                <li className="list_item_nav"><a href="src/UI/NavBar#!">Share</a></li>
                <li className="list_item_nav"><a href="src/UI/NavBar#!">Support</a></li>
            </ul>
        </div>
    );
};

export default NavBar;