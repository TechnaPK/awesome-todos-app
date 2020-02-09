import React, { Component } from 'react';

import { TodosContext } from '../contexts/TodosContext'

class About extends Component {

    render() {

        return (
            <TodosContext.Consumer>
                {(todosContext) => {

                    console.log(todosContext)

                    return <div className="About">
                        <div className="container">
                            <div className="row" style={{ marginTop: 40 }}>
                                <div className="col s12 m8">
                                    <div className="card-panel">
                                        <h5>About Page</h5>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eos laudantium ratione necessitatibus? Impedit, pariatur illo accusamus doloribus neque nemo, natus ducimus animi officia nesciunt iusto qui atque voluptatem. Excepturi.</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eos laudantium ratione necessitatibus? Impedit, pariatur illo accusamus doloribus neque nemo, natus ducimus animi officia nesciunt iusto qui atque voluptatem. Excepturi.</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eos laudantium ratione necessitatibus? Impedit, pariatur illo accusamus doloribus neque nemo, natus ducimus animi officia nesciunt iusto qui atque voluptatem. Excepturi.</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eos laudantium ratione necessitatibus? Impedit, pariatur illo accusamus doloribus neque nemo, natus ducimus animi officia nesciunt iusto qui atque voluptatem. Excepturi.</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eos laudantium ratione necessitatibus? Impedit, pariatur illo accusamus doloribus neque nemo, natus ducimus animi officia nesciunt iusto qui atque voluptatem. Excepturi.</p>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="card-panel">
                                        <h5>Sidebar</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                }}
            </TodosContext.Consumer>
        )



    }

}

export default About