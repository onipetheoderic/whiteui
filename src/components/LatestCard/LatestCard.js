import React, {PureComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {     
    Grid, 
    Box,
    Typography,
   } from '@material-ui/core';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';


  
const useStyles = makeStyles((theme) => ({
    headerText: {
        fontFamily: 'Lato',
        fontSize: 14,
        fontWeight: 400,
        color: "#8181A5",
        marginTop:5
    },
    headerTextMain: {
        fontFamily: 'Lato',
        fontSize: 20,
        fontWeight: 800,
        color: "#1C1D21",
       
    },
  DashboardCard: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: 700,
    color: "black",
    marginLeft:20,
    alignSelf: 'center'
   },
   itemSale: {
    marginLeft:20,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop:10,
    color: "#1C1D21",
   },
   iconDashboardText: {
    color:'#8181A5',
    fontSize:20,
    borderRadius:5,
    padding:10,
    backgroundColor:'#dfdff1'
  },
}));

export default function DashboardCard(props) {    
 
    const classes = useStyles();
    
    return ( 
        <Box style={{
            display:'flex',
            alignItems:'center',
            height: 70,
            marginTop:20,
            background: 'rgba(245, 245, 250, 0.4)',
            borderRadius: 10,
            width:'93%'}}>
            <Box style={{marginLeft:20, display:'flex'}}>
            <FontAwesomeIcon icon={faCartPlus} className={classes.iconDashboardText} />
            <Typography className={classes.itemSale}>Item Sale #340-00</Typography>
            </Box>
        </Box>
    );
}
