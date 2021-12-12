import { Container, Grid, Box, Typography, Button } from '@mui/material';
import React from 'react';
import hero3 from '../../../images/hero3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './Banner.css'
import { Link } from 'react-router-dom';
AOS.init();


const Banner = () => {
    return (
        <Container className="hero-section">
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} sm={6} md={6} className="hero-info" >

                    <Box className="about-info">
                        <Typography className="my-name" variant="h3" >
                            Jiban Krisna Das <br />
                        </Typography>
                        <Typography variant="h4" style={{ color: 'rgb(255 174 43)', fontFamily: 'roboto' }}>
                            Junior Web Developer
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 16, fontWeight: 500, color: 'gray' }}>
                            I am an enthusiastic learner. I have developed varied skills in web development by completing web development course by Programming Hero. As a MERN stack developer I have gathered standard level skills in HTML5, CSS3, JavaScript, React Js, Node Js, MongoDB and some other web related skills.
                        </Typography>
                    </Box>

                    <Box>
                        <Link to="/about">
                            <Button variant='contained' style={{ marginRight: 30, fontWeight: 700, backgroundColor: '#142b6b' }}>About Me</Button>
                        </Link>

                        <a href="https://drive.google.com/file/d/1UpK4eDkIDmOhEP4Fr_v_9pvZjsK0weBJ/view?usp=sharing" target="_blank" rel="noreferrer" className="download-resume" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">Download Resume</a>
                    </Box>

                    <Box className="banner-social-media-container">
                        <a href="https://www.facebook.com/JKD86/" alt="JKD facebook profile" target="_blank" rel="noreferrer" className="banner-social-media" ><FontAwesomeIcon icon={faFacebookF} /></a>

                        <a href="https://www.linkedin.com/in/jkd-jibon/" alt="JKD LinkedIn profile" target="_blank" rel="noreferrer" className="banner-social-media"><FontAwesomeIcon icon={faLinkedin} /></a>

                        <a href="https://github.com/jkdas" alt="My Git profile" target="_blank" rel="noreferrer" className="banner-social-media" ><FontAwesomeIcon icon={faGithub} /></a>

                        <a href="https://stackoverflow.com/users/15530843/jiban-krisna-das" alt="My Stackoverflow profile" target="_blank" rel="noreferrer" className="banner-social-media"><FontAwesomeIcon icon={faStackOverflow} /></a>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={6} className="hero-img">
                    <img style={{ width: 350 }} src={hero3} alt="" />
                </Grid>
            </Grid>


        </Container>
    );
};

export default Banner;