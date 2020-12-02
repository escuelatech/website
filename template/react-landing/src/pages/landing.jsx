// import './App.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/main.css';

import React from 'react';
import Banner from '../components/banner';
import Main from '../components/main';
import Footer from '../components/footer';

const Landing = () => {
    return (
        <>
            <Banner />
            <Main />
            <Footer />
        </>
    )
}

export default Landing;