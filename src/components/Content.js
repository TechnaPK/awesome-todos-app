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
                    <input type="text" value={this.state.todoField} placeholder="Enter Todo" onChange={this.handleChange} />
                    <button onClick={() => {
                        let todo = { title: this.state.todoField, time: "any", isCompleted: false }
                        todosContext.addToList(todo)
                    }}>Add Todo</button>
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

                            <h2>Todos</h2>

                            <div className="DisplayTodos">
                                <ul>
                                    {todosContext.todos.map((todo, index) => {
                                        return <li key={index} className={todo.isCompleted === true ? "completed" : ""}>
                                            {todo.title === "Breakfast" ? `I don't like eggs` : todo.title}
                                            <button style={{ float: 'right' }} onClick={() => { todosContext.deleteTodo(todo) }}>Delete</button>
                                            {
                                                todo.isCompleted
                                                    ? ''
                                                    : <button style={{ float: 'right', marginRight: 5 }} onClick={() => { todosContext.markCompleted(todo) }}>Mark As Completed</button>
                                            }
                                        </li>
                                    })}
                                </ul>
                            </div>

                            {/* <DisplayTodos abc={this.state.todos} /> */}

                            <AddTodo addToList={this.addToList} />
                            <div style={{ clear: 'both' }}></div>
                        </div>


                    }}
                </TodosContext.Consumer>
            }}
        </AuthContext.Consumer>


    }

}

export default Content