import React from 'react';
import {     
    Grid, 
    Box,
    Avatar
   } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from "./MaterialStyles/materialStyles";
import { BoxOutline, DashboardDoubleIcon,  DashboardTextContainer, IconBox, VerticalSectionFlex, VerticalSection, NavThreeContainer, NavTwoContainer } from "./MaterialStyles/miniStyles";

import logoImage from '../../assets/images/LogoDark.png';
import HeaderText from '../../components/HeaderText';


export default function LoginLayout(props) {
    const classes = useStyles();
    const { iconList } = props;
    console.log("HHH",iconList) 
    return (
        <Grid container component="main" className={classes.root}>
          
            <Grid className={classes.navOneContainer}>
          
                <VerticalSection>
                    <Box className={classes.logoContainer}>
                        <Avatar alt="logo" src={logoImage} className={classes.bgImage}  />
                        
                    </Box>
                    <Box className={classes.iconsContainer}>
                        {iconList.map((eachIcon, index) => (
                        <BoxOutline>
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
                </VerticalSection>
            </NavThreeContainer>
        </Grid>
    )
}