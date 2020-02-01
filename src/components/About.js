import React, { Component } from 'react';

import { TodosContext } from '../contexts/TodosContext'

class About extends Component {

    render() {

        return (
            <TodosContext.Consumer>
                {(todosContext) => {

                    console.log(todosContext)

                    return <div className="About">

                        <h2>About Page</h2>

                    </div>

                }}
            </TodosContext.Consumer>
        )



    }

}

export default About