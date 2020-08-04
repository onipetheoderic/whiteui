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
import DashboardCard from '../../components/DashboardCard';
import LineChart from '../../components/LineChart';
import DashLineChart from "../../components/DashLineChart";
import Table from "../../components/Table";
import LatestCard from '../../components/LatestCard';
import { data1, data2, data3, mainChartData, dataDashLine } from './sampleData';

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
    const dashboardCard = <DashboardCard data={data1} />
    const dashboardCardTwo = <DashboardCard data={data2}/>
    const dashboardCardThree = <DashboardCard data={data3}/>
    
    let dashboardCardList = [dashboardCard, dashboardCardTwo, dashboardCardThree]
  
    const mainChart = <LineChart data={mainChartData} />

    const DashLineChartInit = <DashLineChart data={dataDashLine} />

    const TableInit = <Table />
    
    const latestCard1 = <LatestCard />
    const latestCard2 = <LatestCard />
    const latestCard3 = <LatestCard />
    const latestCard5 = <LatestCard />
    const latestCard4 = <LatestCard />
    
    const latestCards = [latestCard1, latestCard2, latestCard3, latestCard4, latestCard5]
    return (
        <DashboardLayout latest={latestCards} table={TableInit} dashLineChart={DashLineChartInit} mainChart={mainChart} iconList={iconList} dashboardCardList={dashboardCardList}>
           
        </DashboardLayout>  
     
  );
}

