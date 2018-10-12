import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Link} from "react-router-dom";
import routes from "./routes";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Link to="/">Home</Link>
            <Link to="/add">Create New Product</Link>
          </header>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
