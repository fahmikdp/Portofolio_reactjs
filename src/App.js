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
      <Switch>
          <Route exact path='/Portofolio_reactjs/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Skill' component={Skill} />
          <Route path='/Work' component={Work} />
          <Route path='/Contact' component={Contact} />
      </Switch>
    </div>
    </Router>
  )
}


export default App;