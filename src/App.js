import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
    <div className="App">
      <Nav />
      <switch>
          <Route path='/Portfolio_reactjs/' component={Home} exact />
          <Route path='/Portfolio_reactjs/About' component={About} />
          <Route path='/Portfolio_reactjs/Skill' component={Skill} />
          <Route path='/Portfolio_reactjs/Work' component={Work} />
          <Route path='/Portfolio_reactjs/contact' component={Contact} />
      </switch>
    </div>
    </Router>
  )
}


export default App;