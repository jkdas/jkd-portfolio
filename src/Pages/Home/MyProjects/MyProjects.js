import { Grid, Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import React from 'react';
import "./MyProjects.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const MyProjects = (props) => {
    const { pid, projectName, description, img } = props.project;
    const url = `/project/${pid}`;
    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }} className="project-frame">
                    <CardMedia
                        component="img"
                        style={{ width: 400, height: 250, margin: '0 auto' }}
                        image={img}
                        alt="project image"
                        className="photo"
                    />
                    <CardContent className="project-detail">
                        <Typography variant="h5" component="div">
                            {projectName}
                        </Typography>
                        <Typography variant="body2">
                            {description.slice(0, 250)}
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 3 }}>
                            <Link to={url}>
                                <Button variant='contained' style={{ fontWeight: 700, backgroundColor: '#142b6b' }}>More Details</Button>
                            </Link>
                        </Box>
                    </CardContent>
                </Card >
            </Grid >

        </>
    );
};

export default MyProjects;