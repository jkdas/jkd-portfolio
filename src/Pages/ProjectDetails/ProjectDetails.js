import { Button, Card, CardActions, CardContent, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProjectDetails.css";
import Navigation from '../Navigation/Navigation'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const ProjectDetails = () => {

    const { pid } = useParams();
    const [moreDetails, setMoreDetails] = useState([]);
    const [singleProjectDetail, setSingleProjectDetail] = useState({});

    useEffect(() => {
        fetch('/projectDetailsDb.json')
            .then(res => res.json())
            .then(data => setMoreDetails(data))

    }, [])

    // find course detail according to course id 
    useEffect(() => {
        const foundSingleProjectDetail = moreDetails?.find(project => project.pid === pid)
        setSingleProjectDetail(foundSingleProjectDetail);
    }, [moreDetails])

    return (
        <>
            <Navigation></Navigation>
            <div className="main-swiper">
                <Swiper
                    effect={"coverflow"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    className="swiper"
                >
                    <div className="swiper-slide">
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={singleProjectDetail?.images?.img8} alt="" />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>

            <div>
                <Card sx={{ maxWidth: 600 }} className="project-detail-info card-small-device" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" className="project-name">
                            {singleProjectDetail?.projectName}
                        </Typography>
                        <Box>
                            <Typography variant="body2" className="project-detail-text" data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <li>
                                    {singleProjectDetail?.keyFeatures?.feature1}
                                </li>
                            </Typography>
                            <Typography variant="body2" className="project-detail-text" data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <li>
                                    {singleProjectDetail?.keyFeatures?.feature2}
                                </li>
                            </Typography>
                            <Typography variant="body2" className="project-detail-text" data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <li>
                                    {singleProjectDetail?.keyFeatures?.feature3}
                                </li>
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions className="project-link-btn" data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <a href={singleProjectDetail?.links?.siteLink} target="_blank" rel="noreferrer"><Button size="small">Live Site</Button></a>
                        <a href={singleProjectDetail?.links?.clientSide} target="_blank" rel="noreferrer"><Button size="small">Client Side</Button></a>
                        {singleProjectDetail?.links?.serverSide && <a href={singleProjectDetail?.links?.serverSide} target="_blank" rel="noreferrer"><Button size="small">Server Side</Button></a>}
                    </CardActions>

                    <CardContent data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <ul className="technology-tag">
                            <li>
                                {singleProjectDetail?.technology?.tech1}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech2}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech3}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech4}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech5}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech6}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech7}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech8}
                            </li>
                            <li>
                                {singleProjectDetail?.technology?.tech9}
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default ProjectDetails;