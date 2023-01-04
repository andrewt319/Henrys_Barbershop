import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Gallery from './components/Pages/Gallery';
import Reviews from './components/Pages/Reviews';
import BookNow from './components/Pages/BookNow';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/book-now' component={BookNow} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
