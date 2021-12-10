import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Avatar, Box, useTheme } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Navigation.css'


export default function Navigation() {
    const theme = useTheme();
    const navbarStyle = makeStyles({
        appBarStyle: {
            backgroundColor: '#142b6b !important'
        },
        /* drawerStyle: {
            backgroundColor: '#0058a0'
        }, */
        navMenu: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
        },
        navMenuItem: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                marginLeft: 'auto'
            },
        },
        mobileMenuDrawer: {
            textDecoration: 'none',
            color: '#000'
        }
    })

    const { navMenu, navIcon, navMenuItem, navLogo, appBarStyle, mobileMenuDrawer } = navbarStyle();
    const [state, setState] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar className={appBarStyle} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Avatar className={navLogo} alt="JKD's Profile" src="./jkd.jpg" />
                        </Typography>
                        <Box className={navMenuItem}>
                            <Link className={navMenu} to="/"><Button color="inherit">Home</Button></Link>
                            <Link className={navMenu} to="/about"><Button color="inherit">About</Button></Link>
                            <Link className={navMenu} to="/blog"><Button color="inherit">Blog</Button></Link>
                            {/* <Link className={navMenu} to="#contact"><Button color="inherit">Contact</Button></Link> */}
                            <a href="#contact" className="contact-btn-nav"><Button color="inherit">Contact</Button></a>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 100 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button >
                                    <ListItemText>
                                        <Link className={mobileMenuDrawer} to="/">Home</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <ListItemText>
                                        <Link className={mobileMenuDrawer} to="/about">About</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <ListItemText>
                                        <a href="#contact" className={mobileMenuDrawer}>Contact</a>
                                    </ListItemText>
                                </ListItem>
                            </List>

                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}
