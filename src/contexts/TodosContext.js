import React, { Component, createContext } from 'react';

export const TodosContext = createContext();

export default class TodosContextProvider extends Component {

    state = {
        todos: [
            // { title: "Offering Prayer", time: "5am", isCompleted: true },
            // { title: "Morning Walk", time: "6am", isCompleted: false },
            // { title: "Breakfast", time: "7am", isCompleted: true },
        ]
    }

    componentDidMount = () => {
        let oldTodos = JSON.parse(localStorage.getItem("todos")) || []
        this.setState({ todos: oldTodos })
    }

    addToList = (todo) => {

        let newTodos = [...this.state.todos, todo]
        this.setState({ todos: newTodos })
        this.saveToStorage(newTodos)

    }

    markCompleted = (todo) => {

        let newTodos = this.state.todos.map((t, i) => {
            if (todo === t)
                t.isCompleted = true

            return t
        })

        this.setState({ todos: newTodos })
        this.saveToStorage(newTodos)
    }

    deleteTodo = (todo) => {

        let newTodos = this.state.todos.filter((t, i)=>{
            return t !== todo
        })

        this.setState({ todos: newTodos })
        this.saveToStorage(newTodos)

    }

    saveToStorage = (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos))
    }

    render() {

        return (
            <TodosContext.Provider value={{ ...this.state, addToList: this.addToList, markCompleted: this.markCompleted, deleteTodo: this.deleteTodo }}>
                {this.props.children}
            </TodosContext.Provider>
        )
    }

}
