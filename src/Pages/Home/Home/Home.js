import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Projects></Projects>
            <MySkills></MySkills>
            <Footer></Footer>
        </div>
    );
};

export default Home;