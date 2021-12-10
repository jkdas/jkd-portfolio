import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Grid, Box, Container, Typography, Button } from '@mui/material';
import hero from '../../images/hero.png'
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
AOS.init();

const About = () => {
    return (
        <>

            <Container className="about-section">
                <Typography variant='h2' sx={{ my: 3, fontSize: 30, fontWeight: 500 }} className="about-header">
                    About Me
                </Typography>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12} sm={5} md={5} sx={{ my: 5 }} >
                        <Box className="about-img">
                            <img src={hero} alt="JKD about" />
                        </Box>

                    </Grid>

                    <Grid item xs={12} sm={7} md={7} >

                        <Typography variant='h6' sx={{ my: 3, fontSize: 20, fontWeight: 500 }} className="about-section-info">
                            I am an enthusiastic learner. I have developed varied skills in web development by completing web development course by Programming Hero. As a MERN stack developer I have gathered standard level skills in HTML5, CSS3, JavaScript, React Js, Node Js, MongoDB and some other web related skills. My projects will describe me well.
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 20, fontWeight: 500 }} className="para-two">
                            I have received B.Sc. (Engg) degree in Computer Science and Engineering from Asian University of Bangladesh and Master in Information Technology (MIT) degree from University of Dhaka. I would like to mention that my bachelor and master degree language of study was English. I have also completed Cisco Networking Academy course with outstanding result from Bangladesh University of Engineering and Technology (BUET).
                        </Typography>
                        <Link to="/home" className="back-to-home" >
                            <Button variant='contained' className="back-to-home-btn" data-aos="zoom-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">Back to Home</Button>
                        </Link>
                    </Grid>
                </Grid >
            </Container>

        </>
    );
};

export default About;