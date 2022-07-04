import React from "react";
import "./navBar.css";
// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NAVBAR">
            <nav>
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <span>Menu</span>
                </label>
                <label className="logo" htmlFor="">Атлас мозга</label>
                <ul>
                    <li><a className="active" href="#">Главная страница</a></li>
                    <li><a href="#">Выйти</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
