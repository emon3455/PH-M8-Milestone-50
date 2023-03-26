import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <header className="header">

            <div className="">
                <img src={logo} alt=""/>
            </div>

            <nav className='headerNav'>
                <a href="./order">Order</a>
                <a href="./orderReview">Order-Review</a>
                <a href="./manageInventory">Manage-Inventory</a>
                <a href="./login">Login</a>
            </nav>

        </header>
    );
};

export default Header;