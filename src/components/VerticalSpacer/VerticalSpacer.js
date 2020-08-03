import React from 'react';
import PropTypes from 'prop-types';
import {     
    Box
   } from '@material-ui/core';
   import { makeStyles } from '@material-ui/core/styles';


export default function HeaderComponent(props) {
    const mobileOnly = props.mobileOnly == true ? "none" : "block"
    const useStyles = makeStyles((theme) => ({
        root: {
          marginTop: props.topSpace,
          marginBottom: props.bottomSpace,
          display: mobileOnly,          
          [theme.breakpoints.down('sm')]: {
            marginTop: props.mobileTopSpace,
            marginBottom: props.mobileBottomSpace,
            paddingTop: props.mobileTopPadding,
            display: "block"
          },  
           
        },
     
        }));
    const classes = useStyles();
    
    return (
        <Box className={classes.root} >
            {props.children}
        </Box>
    )
}

HeaderComponent.propTypes = {
    topSpace: PropTypes.number.isRequired,
    bottomSpace: PropTypes.number.isRequired,
    mobileTopSpace: PropTypes.number.isRequired,
    mobileBottomSpace: PropTypes.number.isRequired,
    mobileTopPadding: PropTypes.number.isRequired,
}