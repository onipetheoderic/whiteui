import React, {useState} from 'react';
import {     
    Box,
    RadioGroup,
    FormControlLabel,
    Radio,
    Avatar,
    FormControl,
   } from '@material-ui/core';

import {useStyles } from '../../layouts/DashboardLayout/MaterialStyles/materialStyles'
import DashboardLayout from "../../layouts/DashboardLayout";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function DashboardPage() {
    const classes = useStyles();

    let iconOne = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconTwo = <FontAwesomeIcon icon={faBars} className={classes.iconStyleDashboard} />
    let iconThree = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconFour = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconFive = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconSix = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconSeven = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconEight = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconNine = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconTen = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconEleven = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />
    let iconTwelve = <FontAwesomeIcon icon={faGoogle} className={classes.iconStyleDashboard} />

    let iconList = [
        iconOne,
        iconTwo,
        iconThree,
        iconFour,
        iconFive,
        iconSix,
        iconSeven,
        iconEight,
        iconNine,
        iconTen,
        iconEleven,
        iconTwelve
    ]
  return (
        <DashboardLayout iconList={iconList}>
           
        </DashboardLayout>  
     
  );
}

