import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { AuthContext } from '../contexts/AuthContext'

import firebase from '../config/firebase'

import logo from '../images/logo.png'

class Header extends Component {

    static contextType = AuthContext

    handleClick = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {

        return <div className="Header">

            <nav className="teal">
                <div className="nav-wrapper">
                    <div className="container">
                        <Link className="brand-logo" to="/"><img src={logo} alt="Logo"/></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {
                                !this.context.isAuthenticated
                                    ? <li><Link to="/login">Login</Link></li>
                                    : <li><Link to="/" onClick={this.handleClick}>Logout</Link></li>

                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
}

export default Header