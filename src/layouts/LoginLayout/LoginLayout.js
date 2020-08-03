import React from 'react';
import {     
    Grid, 
    Box,
    Avatar
   } from '@material-ui/core';


import { useStyles } from "./MaterialStyles/materialStyles";
import { BackgroundWithImage } from "./MaterialStyles/miniStyles";

import bgImage from '../../assets/images/bgImage.png';


export default function LoginLayout(props) {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <Box className={classes.playGroundStyle}>
            </Box>
            <Grid item xs={12} sm={12} md={7}>
            <Box className={classes.childStyle}>
            {props.children}
            </Box>
                
            </Grid>
            <Grid item xs={12} sm={8} md={5} className={classes.image}>
            <BackgroundWithImage>
            <Avatar alt="logo" src={bgImage} className={classes.bgImage}  />
            </BackgroundWithImage>
            </Grid>
        </Grid>
    )
}