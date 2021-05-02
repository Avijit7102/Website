import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyWork from '../MyWork/MyWork';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <MyWork></MyWork>
            <Footer></Footer>
        </div>
    );
};

export default Home;