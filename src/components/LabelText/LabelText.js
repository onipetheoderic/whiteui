import React from 'react';
import PropTypes from 'prop-types';
import {     
    Grid, 
    Typography,
   } from '@material-ui/core';
import { useStyles } from "./MaterialStyles/materialStyles";


export default function LabelText(props) {
    const { theme } = props
    const classes = useStyles(theme);
    const { title } = props;
    
    return (
        <Grid className={classes.aligner}>
            <Typography className={classes.headerText}>
                {title}
            </Typography>
        </Grid>
    )
}

LabelText.propTypes = {
    title: PropTypes.string.isRequired,
}
