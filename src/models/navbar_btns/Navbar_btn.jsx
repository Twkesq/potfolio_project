import React from 'react';
import './navbar_btn.css';

const NavbarBtn = () => {

    return (
        <div className="navbar_btns">
            <button className="btn_nav">About me</button>
            <button className="btn_nav">My skills</button>
            <button className="btn_nav">My Projects</button>
        </div>
    );
};

export default NavbarBtn;