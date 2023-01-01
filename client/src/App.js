import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/Pages/AboutUsPage';
import Home from './components/Pages/HomePage';
import Gallery from './components/Pages/GalleryPage';
import Reviews from './components/Pages/ReviewsPage';
import Appointment from './components/Pages/AppointmentPage';
import Navbar from './components/Navbar.js';

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/About' element={<AboutUs/>}></Route>
                    <Route path='/Gallery' element={<Gallery/>}></Route>
                    <Route path='Reviews' element={<Reviews/>}></Route>
                    <Route path='Appointments' element={<Appointment/>}></Route>
                </Routes>
            </div>

        </>
    );
};

export default App;