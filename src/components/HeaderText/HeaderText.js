import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {     
    Grid, 
    Typography,
   } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
 
  headerText: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: 700,
    color: "black",
    marginLeft:20,
    alignSelf: 'center'
   }
}));

export default function HeaderText(props) { 
    const { title } = props;
 
    const classes = useStyles();

  return ( 
 
    <Typography className={classes.headerText}>
        {title}
    </Typography>

  );
}

HeaderText.propTypes = {
    title: PropTypes.string.isRequired,
}