import React, { Component } from 'react';

import { AuthContext } from '../contexts/AuthContext'

class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return <div className="LoginForm">

            <div className="row">
                <div className="col s12">
                    <h5>Login</h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <input value={this.state.email} id="email" name="email" type="email" className="validate" onChange={this.handleChange} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input value={this.state.password} id="password" name="password" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col s12 right-align">
                        <button className="btn" style={{ width: '100%' }}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    }

}

class RegisterForm extends Component {

    state = {
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return <div className="RegisterForm">

            <div className="row">
                <div className="col s12">
                    <h5>Register</h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <input value={this.state.email} id="email" name="email" type="email" className="validate" onChange={this.handleChange} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input value={this.state.password} id="password" name="password" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                        <input value={this.state.confirmPassword} id="confirmPassword" name="confirmPassword" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                    <div className="col s12 right-align">
                        <button className="btn" style={{ width: '100%' }}>Login</button>
                    </div>
                </form>
            </div>

        </div>
    }

}

export default class LoginPage extends Component {

    state = {
        isLoginForm: true
    }

    toggleForm = () => {
        this.setState({ isLoginForm: !this.state.isLoginForm })
    }

    render() {
        return <AuthContext.Consumer>
            {(authContext) => {

                return <div className="LoginPage">
                    <div className="container" style={{ maxWidth: 450 }}>
                        <div className="row" style={{ marginTop: 40 }}>
                            <div className="col s12">
                                <div className="card-panel">
                                    {
                                        this.state.isLoginForm
                                            ? <LoginForm />
                                            : <RegisterForm />
                                    }
                                    {
                                        this.state.isLoginForm
                                            ? <p>Don't have an account? <span style={{ cursor: 'pointer' }} className="underline teal-text strong" onClick={this.toggleForm}>Register here</span></p>
                                            : <p>Already registered? <span style={{ cursor: 'pointer' }} className="underline teal-text strong" onClick={this.toggleForm}>Login here</span></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }}
        </AuthContext.Consumer>

    }

}