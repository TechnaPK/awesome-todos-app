import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { AuthContext } from '../contexts/AuthContext'

class Header extends Component {

    static contextType = AuthContext

    render() {

        return <div className="Header">

            <nav className="teal">
                <div className="nav-wrapper">
                    <div className="container">
                        <Link className="brand-logo" to="/">Todo Application</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {
                                !this.context.isAuthenticated
                                    ? <li><Link to="/login">Login</Link></li>
                                    : <li><Link to="/">Logout</Link></li>

                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
}

export default Header