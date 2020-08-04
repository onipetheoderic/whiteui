import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {     
    Grid, 
    Box,
    Typography,
   } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
 
  DashboardCard: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: 700,
    color: "black",
    marginLeft:20,
    alignSelf: 'center'
   }
}));

export default function DashboardCardPlayground(props) {    
 
    const classes = useStyles();

    return ( 
        <Box style={{
            display:'flex', 
            flexWrap:'wrap', 
            justifyContent:'space-between',
            width:'100%'}}>
                
            {props.children}
        </Box>
    );
}
