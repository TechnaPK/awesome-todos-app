import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {

    state = {
        isAuthenticated: false,
        user: {}
    }

    render() {

        return (
            <AuthContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}
