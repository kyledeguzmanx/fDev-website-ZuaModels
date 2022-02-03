import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Juniors from './components/Juniors';

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Navbar/>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/Men">
                <Men/>
              </Route>
              <Route exact path="/Women">
                <Women/>
              </Route>
              <Route exact path="/Juniors">
                <Juniors/>
              </Route>
          </Switch>
        <Footer/>
      </React.Fragment>
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));