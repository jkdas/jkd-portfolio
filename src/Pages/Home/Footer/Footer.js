import React, { useRef, useState } from 'react';
import { Grid, Box, Alert, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Footer = () => {
    const form = useRef();
    const { register, formState: { errors }, reset } = useForm();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j9gjvf3', 'JKD_temp', form.current, 'user_1QUvf7uzpQmhPt5QDGJFS')
            .then((result) => {
                setSuccess(result)
                reset();
            }, (error) => {
                setError(error)
            });
    };
    return (
        <Box id="contact" className="footer-background" sx={{ mt: 5 }} data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                    Say Hello!
                </Typography>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    I’d love to discuss a new project or grab a cup of <FontAwesomeIcon icon={faCoffee} /> coffee
                </Typography>
            </Box>

            < Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} sm={6} md={3} sx={{ my: 5 }} className="social-media-order">
                    <Box className="social-media-container">
                        <a className="social-media-fb" href="https://www.facebook.com/JKD86/" alt="JKD facebook profile" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a>
                        <br />
                        <a className="social-media-linkeIn" href="https://www.linkedin.com/in/jkd-jibon/" alt="JKD LinkedIn profile" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                        <br />
                        <a className="social-media-git" href="https://github.com/jkdas" alt="My Git profile" target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</a>
                        <br />
                        <a className="social-media-stack" href="https://stackoverflow.com/users/15530843/jiban-krisna-das" alt="My Stackoverflow profile" target="_blank"><FontAwesomeIcon icon={faStackOverflow} /> StackOverflow</a>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6} className="contact-form-order">
                    <Box className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input type="text" defaultValue="" {...register("sender_name", { required: true })} placeholder="Your Name" />
                            <input type="email" defaultValue="" {...register("sender_email", { required: true })} placeholder="Your Email" />
                            <input type="textArea" {...register("message")} placeholder="Your Message" />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="send-btn" type="submit" value="Send Message" />
                        </form>

                        <div>{success && <Alert severity="success"> Message sent successfuly </Alert>}
                            {error && <Alert severity="error"> Error Occured </Alert>}
                        </div>
                    </Box >
                </Grid>
            </Grid >
            <Typography className="copyright" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ----Developed by JKD Jibon----
            </Typography>
        </Box>
    );
};

export default Footer;