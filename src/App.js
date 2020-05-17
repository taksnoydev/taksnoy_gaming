import React from 'react';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router basename='/'>
      <div>
        <Navigation/>
        <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/contact" >
              <Contact/>
            </Route>
            <Route path="/terms" >
              <Terms/>
            </Route>
            <Route path="/privacy">
              <Privacy/>
            </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
