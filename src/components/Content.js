import React, { Component } from 'react';

class DisplayTodos extends Component {
    render() {
        return <div className="DisplayTodos">
            <ul>
                {this.props.abc.map((todo, index) => {
                    return <li key={index}>
                        {todo === "Breakfast" ? `I don't like eggs` : todo}
                    </li>
                })}
            </ul>
        </div>
    }
}

class AddTodo extends Component {

    state = {
        todoField: ""
    }

    handleChange = (event) => {

        this.setState({ todoField: event.target.value })
    }

    handleClick = () => {

        let todo = this.state.todoField

        if (todo !== null) {

            this.props.addToList(todo)
            this.setState({ todoField: "" })

        }

    }

    render() {
        return <div className="AddTodo">
            <input type="text" value={this.state.todoField} placeholder="Enter Todo" onChange={this.handleChange} />
            <button onClick={this.handleClick}>Add Todo</button>
        </div>
    }

}

class Content extends Component {

    constructor( props ){
        super(props)
        this.state = {
            todos: ["Offering Prayer", "Morning Walk", "Breakfast"]
        }
    }

    addToList = (todo) => {
        this.setState({ todos: [...this.state.todos, todo] })
    }

    render() {

        console.log("This message is generated from: render")

        return <div className="Content">

            <h2>Todos</h2>

            <DisplayTodos abc={this.state.todos} />

            <AddTodo addToList={this.addToList} />
            <div style={{ clear: 'both' }}></div>
        </div>

    }

}

export default Content