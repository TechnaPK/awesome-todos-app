import React, { Component } from 'react';

// class DisplayTodos extends Component {
//     render() {
//         return <div className="DisplayTodos">
//             <ul>
//                 {this.props.abc.map((todo, index) => {
//                     return <li key={index}>
//                         {todo.title === "Breakfast" ? `I don't like eggs` : todo.title}
//                     </li>
//                 })}
//             </ul>
//         </div>
//     }
// }

class AddTodo extends Component {

    state = {
        todoField: ""
    }

    handleChange = (event) => {

        this.setState({ todoField: event.target.value })
    }

    handleClick = () => {

        let value = this.state.todoField
        if (value !== null) {

            let todo = { title: value, time: "any", isCompleted: false }

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

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                // { title: "Offering Prayer", time: "5am", isCompleted: true },
                // { title: "Morning Walk", time: "6am", isCompleted: false },
                // { title: "Breakfast", time: "7am", isCompleted: true },
            ]
        }
    }

    addToList = (todo) => {
        let newTodos = [...this.state.todos, todo]
        this.saveToState(newTodos)
    }

    markCompleted = (todo) => {

        let newTodos = this.state.todos.map((t, i) => {
            if (todo === t)
                t.isCompleted = true
            return t
        })

        this.saveToState(newTodos)
    }

    saveToState = (newTodos) => {
        this.setState({ todos: newTodos })
        localStorage.setItem("todos", JSON.stringify(newTodos))
    }

    componentDidMount = () =>{
        let oldTodos = JSON.parse( localStorage.getItem("todos") ) || []
        this.setState({ todos: oldTodos })
    }

    render() {

        console.log("This message is generated from: render")

        return <div className="Content">

            <h2>Todos</h2>

            <div className="DisplayTodos">
                <ul>
                    {this.state.todos.map((todo, index) => {
                        return <li key={index} className={todo.isCompleted === true ? "completed" : ""}>
                            {todo.title === "Breakfast" ? `I don't like eggs` : todo.title}
                            <button style={{ float: 'right' }} onClick={() => {

                                let newTodos = this.state.todos.filter((t, i) => {
                                    return todo !== t
                                })

                                this.saveToState(newTodos)

                            }}>Delete</button>
                            {
                                todo.isCompleted
                                    ? ''
                                    : <button style={{ float: 'right', marginRight: 5 }} onClick={() => { this.markCompleted(todo) }}>Mark As Completed</button>
                            }
                        </li>
                    })}
                </ul>
            </div>

            {/* <DisplayTodos abc={this.state.todos} /> */}

            <AddTodo addToList={this.addToList} />
            <div style={{ clear: 'both' }}></div>
        </div>

    }

}

export default Content