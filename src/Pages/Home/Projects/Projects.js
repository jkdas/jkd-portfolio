import { Container, Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MyProjects from '../MyProjects/MyProjects';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("./projectsData.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (

        <Container data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <Typography sx={{ fontWeight: 600, m: 5, color: "antiquewhite", textAlign: 'center' }} variant="h5" component="div">
                MY PROJECTS
                < hr />
            </Typography >

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        projects.map(project => <MyProjects
                            key={project.pid}
                            project={project}
                        ></MyProjects>)
                    }
                </Grid>
            </Box>

        </Container >

    );
};

export default Projects;