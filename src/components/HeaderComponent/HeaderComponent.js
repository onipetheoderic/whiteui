import React from 'react';
import PropTypes from 'prop-types';
import {     
    Grid, 
    Box,
    Typography,
   } from '@material-ui/core';
import { useStyles } from "./MaterialStyles/materialStyles";


export default function HeaderComponent(props) {
    const classes = useStyles();
    const { title } = props;
    let newTitle = title.split('|').map((name,index) => {
        return <Typography key={index} className={classes.headerText}>{name}</Typography>
    });
    let mobileText = title.split('.')[0];
    return (
        <Grid container component="main" className={classes.mobileContainer}>
            <Box className={classes.mobileView}>{mobileText}</Box>
                {newTitle}
          
        </Grid>
    )
}

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
}