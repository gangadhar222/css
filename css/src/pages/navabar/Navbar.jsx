import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div className="container">
            <div className="title">
                <h1>Logo comes here</h1>
                <p className="caption">Caption comes here</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
