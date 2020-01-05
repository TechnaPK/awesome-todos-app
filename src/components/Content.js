import React, { Component } from 'react';

class Content extends Component {

    state = {
        todos: ["Offering Prayer", "Morning Walk", "Breakfast"]
    }

    handleClick = () => {

        let todo = prompt("Enter Todo")

        if (todo !== null) {

            let oldTodos = this.state.todos.slice()

            oldTodos.push(todo)

            this.setState({ todos: oldTodos })
        }

    }

    render() {

        return <div className="Content">
            <h2>Todos</h2>
            <ul>
                {this.state.todos.map((todo, index) => {
                    return <li key={index}>
                        {todo === "Breakfast" ? `I don't like eggs` : todo}
                    </li>
                })}
            </ul>
            <button onClick={this.handleClick}>Add Todo</button>
        </div>

    }

}

export default Content