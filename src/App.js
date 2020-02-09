import React from 'react';
import './App.css';

import Header from './components/Header'
import Content from './components/Content'
import About from './components/About'
import Contact from './components/Contact'
import LoginPage from './components/LoginPage'
import Footer from './components/Footer'

import { BrowserRouter, Route } from 'react-router-dom'

import TodosContextProvider from './contexts/TodosContext'
import AuthContextProvider from './contexts/AuthContext'

import M from 'materialize-css'

console.log( M )

function App() {
  return (
    <AuthContextProvider>
      <TodosContextProvider>

        <BrowserRouter>
          <div className="App">
            <Header />

            <Route path="/login" component={LoginPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Content} />

            <Footer />
          </div>
        </BrowserRouter>
        
      </TodosContextProvider>
    </AuthContextProvider>
  );
}

export default App;
