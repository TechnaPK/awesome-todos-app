import React from 'react';
import './App.css';

import Header from './components/Header'
import Content from './components/Content'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter, Route } from 'react-router-dom'

import TodosContextProvider from './contexts/TodosContext'

function App() {
  return (
    <TodosContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />

          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Content} />

          <Footer />
        </div>
      </BrowserRouter>
    </TodosContextProvider>
  );
}

export default App;
