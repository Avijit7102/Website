import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
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
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;