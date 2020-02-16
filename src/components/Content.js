import React, { Component } from 'react';
import { TodosContext } from '../contexts/TodosContext'
import { AuthContext } from '../contexts/AuthContext'

import { db, storage, storageRef } from '../config/firebase'

import M from 'materialize-css'

class AddTodo extends Component {

    state = {
        todoField: "",
        fileURL: null
    }

    handleChange = (event) => {

        this.setState({ todoField: event.target.value })
    }

    handleFileSelection = (event) => {

        let files = event.target.files

        if (files.length < 1) {
            return this.setState({ fileURL: null })
        }

        let file = event.target.files[0]

        storageRef.child(`images/${file.name}`).put(file).then((snapshot) => {

            console.log('Uploaded a blob or file!');
            console.log(snapshot);
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                this.setState({ fileURL: downloadURL })
            });

        }).catch((e) => {

            console.log(e)

        });
    }

    deleteFile = () => {

        // Create a reference from an HTTPS URL
        // Note that in the URL, characters are URL escaped!
        var httpsReference = storage.refFromURL(this.state.fileURL);
        // Delete the file
        httpsReference.delete().then(() => {
            // File deleted successfully
            this.setState({ fileURL: null })
        }).catch(function (error) {
            console.log(error)
        });

    }

    render() {
        return <AuthContext.Consumer>
            {(authContext) => {

                return <TodosContext.Consumer>

                    {(todosContext) => {

                        return <div className="AddTodo">
                            <div className="row">
                                <div className="col s12">
                                    <h5>Add New Item</h5>
                                </div>
                                <div className="col s12">
                                    {
                                        this.state.fileURL !== null
                                            ? <div className="card-panel">

                                                <img src={this.state.fileURL} alt="" style={{ maxWidth: '100%' }} />
                                                <br /><button className="btn red" onClick={this.deleteFile}>Delete</button>
                                            </div>
                                            : <input type="file" onChange={this.handleFileSelection} />
                                    }

                                </div>
                                <div className="input-field col s12">
                                    <input value={this.state.todoField} id="todoField" type="text" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="todoField">Enter Todo</label>
                                </div>
                            </div>
                            <div className="right-align">
                                <button className="btn teal" onClick={() => {


                                    if (this.state.fileURL === null) {
                                        return M.toast({ html: `Please upload photo before posting new todo`, classes: 'red' })
                                    }

                                    let todo = { title: this.state.todoField, time: "any", isCompleted: false }
                                    todo.userId = authContext.user.uid
                                    todo.photo = this.state.fileURL

                                    db.collection("todos").add(todo)
                                        .then((docRef) => {

                                            todo.id = docRef.id
                                            todosContext.addToList(todo)
                                            console.log("Document written with ID: ", docRef.id);

                                        })
                                        .catch((error) => {
                                            console.error("Error adding document: ", error);
                                        });
                                }}>Add Todo</button>
                            </div>
                        </div>

                    }}

                </TodosContext.Consumer>
            }}
        </AuthContext.Consumer>
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