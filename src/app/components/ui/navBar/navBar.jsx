import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

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
                    <li><Link className="active link" to="/models">Модели</Link></li>
                    <li><Link className="link" to="#">Выйти</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
