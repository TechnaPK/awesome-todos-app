import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return <div className="Header">

            <nav className="purple lighten-1">
                <div className="nav-wrapper">
                    <div className="container">
                        <Link className="brand-logo" to="/">Todo Application</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
}

export default Header