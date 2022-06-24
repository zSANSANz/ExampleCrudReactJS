import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./components/home.component";

import CreateTodo from "./components/todos/create-todo.component";
import EditTodo from "./components/todos/edit-todo.component";
import TodosList from "./components/todos/todos-list.component";

import CreateMudir from "./components/mudirs/create-mudir.component";
import EditMudir from "./components/mudirs/edit-mudir.component";
import MudirsList from "./components/mudirs/mudirs-list.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" target="_blank">
              <img src={logo} width="30" height="30" alt="rumahbelajar" />
            </a>
            <Link to="/" className="navbar-brand">Sistem Informasi Rumah Belajar </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/todos" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/mudirs" className="nav-link">Mudir</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} />
          
          <Route path="/todos" exact component={TodosList} />
          <Route path="/todos/edit/:id" component={EditTodo} />
          <Route path="/todos/create" component={CreateTodo} />

          <Route path="/mudirs" exact component={MudirsList} />
          <Route path="/mudirs/edit/:id" component={EditMudir} />
          <Route path="/mudirs/create" component={CreateMudir} />

        </div>
      </Router>
    );
  }
}

export default App;