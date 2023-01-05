import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Gallery from './components/Pages/Gallery';
import Reviews from './components/Pages/Reviews';
import BookNow from './components/Pages/BookNow';
import AboutUsContainer from './components/AboutUsContainer';
import Footer from './components/Footer';
import ReviewsContainer from './components/ReviewsContainer';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Navbar />
      <Home id='home-page-link'/>
      <Cards id='cards-page-link'/>
      <ReviewsContainer id='reviews-page-link'/>
      <BookNow id='book-now-page'/>
      <AboutUsContainer id='about-us-page-link'/>
      <Footer />
    {/*
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
  */}
    </>
  );
}

export default App;
