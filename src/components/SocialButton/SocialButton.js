import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {     
    Box
   } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
 borderizedBox: {
    width: 46,
    height: 46,
    border: '1px solid #ECECF2',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
    margin:4
 },
 iconStyle: {
     alignItems:'center'
 }
}));

export default function ButtonSizes(props) {
    const { iconName } = props
    const classes = useStyles();
    const iconButton = iconName === "facebook" ? <FontAwesomeIcon icon={faFacebook} className={classes.iconStyle} /> : 
                        iconName === "twitter" ? <FontAwesomeIcon icon={faTwitter} className={classes.iconStyle} /> :
                        <FontAwesomeIcon icon={faGoogle} className={classes.iconStyle} />                                
  
    

  return (
    <Box className={classes.borderizedBox}>
        {iconButton}
    </Box>
  );
}

ButtonSizes.propTypes = {
    iconName: PropTypes.string.isRequired,
}