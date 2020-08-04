import React from 'react';
import {     
    Grid, 
    Box,
    Avatar,
    Typography
   } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from "./MaterialStyles/materialStyles";
import { BoxOutline, DashboardDoubleIcon,  DashboardTextContainer, IconBox, VerticalSectionFlex, VerticalSection, NavThreeContainer, NavTwoContainer } from "./MaterialStyles/miniStyles";

import logoImage from '../../assets/images/LogoDark.png';
import HeaderText from '../../components/HeaderText';
import Logo2 from '../../assets/images/Logo2.png';


import DashboardCardPlayground from '../../components/DashboardCardPlayground';

import DashboardCard from '../../components/DashboardCard';

export default function LoginLayout(props) {
    const classes = useStyles();
    const { latest, iconList, dashboardCardList, mainChart, dashLineChart, table } = props;
    return (
        <Grid container component="main" className={classes.root}>
          
            <Grid className={classes.navOneContainer}>
          
                <VerticalSection>
                    <Box className={classes.logoContainer}>
                        <Avatar alt="logo" src={logoImage} className={classes.bgImage}  />
                        
                    </Box>
                    <Box className={classes.iconsContainer}>
                        {iconList.map((eachIcon, index) => (
                        <BoxOutline key={index}>
                            <IconBox>
                                {eachIcon}
                            </IconBox>
                        </BoxOutline>
                        ))}
                        
                        
                    </Box>
                </VerticalSection>
            </Grid>
            <NavTwoContainer>
                <VerticalSection>
                    <Box className={classes.imageContainer}>
                        <img alt="logo" src={Logo2} width={110}/>
                        <Typography className={classes.logoTextRegular}>
                        Welcome,
                        </Typography>
                        <Typography className={classes.logoTextBold}>
                            WhiteUI.store
                        </Typography>

                        <Typography className={classes.latestTextBold}>
                            Latest Updates
                        </Typography>

                        {latest.map((latestCard,index)=>(
                            <>
                            {latestCard}
                            </>
                        ))}
                    </Box>
                   
                </VerticalSection>
            </NavTwoContainer>
            <NavThreeContainer>
                <VerticalSection>
                    <VerticalSectionFlex>
                        <DashboardTextContainer>                    
                            <FontAwesomeIcon icon={faBars} className={classes.iconDashboardText} />
                            <HeaderText title="Dashboard" />
                        </DashboardTextContainer>
                        
                        <DashboardDoubleIcon>                    
                            <FontAwesomeIcon icon={faSearch} className={classes.iconDashboardText} />
                            <FontAwesomeIcon icon={faPlusCircle} className={classes.iconDashboardText} />
                        </DashboardDoubleIcon>
                    </VerticalSectionFlex>    
                    <Box className={classes.boxContainer}>
                        {dashboardCardList.map((singleCard,index)=>(
                          <>
                              {singleCard}
                          </>
                        ))}                      
                    </Box>
                    <Box className={classes.boxContainer}>
                    <Box className={classes.mainChartContainer}>
                        {mainChart}
                    </Box>
                    <Box className={classes.dashChartContainer}>{dashLineChart}
                    </Box>
                    </Box>

                    <Box className={classes.boxContainer}>
                        {table}
                    </Box>
                </VerticalSection>
                
            </NavThreeContainer>
        </Grid>
    )
}