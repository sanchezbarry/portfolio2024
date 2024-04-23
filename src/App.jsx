
// import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,

  // Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App