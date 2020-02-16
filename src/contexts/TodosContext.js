import React, { Component, createContext } from 'react';

import { db } from '../config/firebase'

import M from 'materialize-css'

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

        db.collection("todos").get().then((querySnapshot) => {

            let todos = []
            querySnapshot.forEach((doc) => {
                let todo = doc.data()
                todo.id = doc.id
                console.log(todo)
                // console.log(`${doc.id} => ${doc.data()}`);
                todos.push(todo)
            });

            this.setState({ todos: todos })

        });
    }

    addToList = (todo) => {

        let newTodos = [...this.state.todos, todo]
        this.setState({ todos: newTodos })

    }

    markCompleted = (todo) => {

        var docRef = db.collection("todos").doc(todo.id);

        // Set the "capital" field of the city 'DC'
        return docRef.update({ isCompleted: true })
            .then(() => {
                console.log("Document successfully updated!");

                let newTodos = this.state.todos.map((t, i) => {
                    if (todo === t)
                        t.isCompleted = true
                    return t
                })

                this.setState({ todos: newTodos })
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

    }

    deleteTodo = (todo) => {

        db.collection("todos").doc(todo.id).delete()
            .then(() => {

                M.toast({ html: `${todo.title} deleted successfully`, classes: 'green' })
                let newTodos = this.state.todos.filter((t, i) => {
                    return t !== todo
                })

                this.setState({ todos: newTodos })

            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });

    }

    render() {

        return (
            <TodosContext.Provider value={{ ...this.state, addToList: this.addToList, markCompleted: this.markCompleted, deleteTodo: this.deleteTodo }}>
                {this.props.children}
            </TodosContext.Provider>
        )
    }

}
