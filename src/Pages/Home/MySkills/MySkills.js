import { Container, Typography } from '@mui/material';
import * as React from 'react';
import "./MySkills.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Box, Grid } from '@mui/material';
AOS.init();

const MySkills = () => {
    return (
        <Box className="skill-background" sx={{ my: 5 }}>
            <Container sx={{ flexGrow: 1, mb: 5 }} data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <Typography sx={{ fontWeight: 600, m: 5, color: "antiquewhite", textAlign: 'center' }} variant="h5" component="div">
                    MY SKILLS
                    <hr />
                </Typography>

                <Grid sx={{ flexGrow: 1 }} container spacing={2} >
                    <Grid item xs={12} sm={6} md={4} className="skill-card-expert">
                        <Box>
                            <Typography sx={{ fontWeight: 600, m: 1, color: "#fff", textAlign: 'center' }} variant="h5" component="div">
                                Front End and Language
                            </Typography>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>Material UI</li>
                                <li>JavaScript</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="skill-card-comfort">
                        <Box>
                            <Typography sx={{ fontWeight: 600, m: 1, color: "#fff", textAlign: 'center' }} variant="h5" component="div">
                                Backend and Framework
                            </Typography>
                            <ul>
                                <li>JavaScript</li>
                                <li>React JS</li>
                                <li>Express Js</li>
                                <li>Node Js</li>
                                <li>MongoDb</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className="skill-card-tools">
                        <Box>
                            <Typography sx={{ fontWeight: 600, m: 1, color: "#fff", textAlign: 'center' }} variant="h5" component="div">
                                Tools and Technology
                            </Typography>
                            <ul>
                                <li>VS Code</li>
                                <li>Firebase</li>
                                <li>Netlify</li>
                                <li>Heroku</li>
                                <li>JWT Token</li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >

    );
};

export default MySkills;