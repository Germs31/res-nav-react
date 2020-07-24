import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home/> } />
        <Route path="/about" render={() => <About/> } />
        <Route path="/contact" render={() => <Contact/> } />
        <Route path="/blog" render={() => <Blog/> } />
        <Route path="/portfolio" render={() => <Portfolio/> } />
      </Switch>
    </div>
  );
}

export default App;
