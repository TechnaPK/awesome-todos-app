import React, { Component } from 'react';
import { TodosContext } from '../contexts/TodosContext'
import { AuthContext } from '../contexts/AuthContext'

class AddTodo extends Component {

    state = {
        todoField: ""
    }

    handleChange = (event) => {

        this.setState({ todoField: event.target.value })
    }

    render() {

        return <TodosContext.Consumer>

            {(todosContext) => {

                return <div className="AddTodo">
                    <div className="row">
                        <div className="col s12">
                            <h5>Add New Item</h5>
                        </div>
                        <div className="input-field col s12">
                            <input value={this.state.todoField} id="todoField" type="text" className="validate" onChange={this.handleChange} />
                            <label htmlFor="todoField">Enter Todo</label>
                        </div>
                    </div>
                    <div className="right-align">
                        <button className="btn teal" onClick={() => {
                            let todo = { title: this.state.todoField, time: "any", isCompleted: false }
                            todosContext.addToList(todo)
                        }}>Add Todo</button>
                    </div>
                </div>

            }}

        </TodosContext.Consumer>

    }

}

class Content extends Component {

    render() {
        return <AuthContext.Consumer>
            {(authContext) => {
                return <TodosContext.Consumer>
                    {(todosContext) => {

                        return <div className="Content">

                            <div className="container">
                                <div className="row" style={{ marginTop: 40 }}>
                                    <div className="col s8">
                                        <div className="card-panel">

                                            <ul className="collection with-header">
                                                <li className="collection-header"><h4>Todos</h4></li>

                                                {todosContext.todos.map((todo, index) => {
                                                    return <li key={index} className={`collection-item ${todo.isCompleted === true ? "completed" : ""}`}>
                                                        <div>{todo.title === "Breakfast" ? `I don't like eggs` : todo.title}
                                                            <a href="#!" className="secondary-content red-text" onClick={() => { todosContext.deleteTodo(todo) }}><i className="material-icons">delete</i></a>
                                                            {
                                                                todo.isCompleted
                                                                    ? ''
                                                                    : <a href="#!" className="secondary-content green-text" onClick={() => { todosContext.markCompleted(todo) }}><i className="material-icons">done</i></a>
                                                            }
                                                        </div>
                                                    </li>
                                                })}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col s4">
                                        <div className="card-panel">
                                            {
                                                authContext.isAuthenticated === true
                                                    ? <AddTodo />
                                                    : <h5 className="card-panel red white-text center">You must Login to add new todo</h5>
                                                    
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    }}
                </TodosContext.Consumer>
            }}
        </AuthContext.Consumer>


    }

}

export default Content