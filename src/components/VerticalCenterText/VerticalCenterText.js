import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {     
    Grid, 
    Typography,
   } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  aligner: {
      height:46,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10,
      [theme.breakpoints.down('sm')]: {
               display:'none'
      }, 
  },
  headerText: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 400,
    color: "#8181A5",
    alignSelf: 'center'
   }
  
}));

export default function VerticalCenterText(props) { 
    const { title } = props;
 
  const classes = useStyles();

  return ( 
    <Grid className={classes.aligner}>
    <Typography className={classes.headerText}>
        {title}
    </Typography>
</Grid>
  );
}

VerticalCenterText.propTypes = {
    title: PropTypes.string.isRequired,
}