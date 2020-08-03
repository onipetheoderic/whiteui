import React, {useState} from 'react';
import {     
    Box,
    RadioGroup,
    FormControlLabel,
    Radio,
    Avatar,
    FormControl,
   } from '@material-ui/core';

import LoginLayout from "../../layouts/LoginLayout";
import HeaderComponent from "../../components/HeaderComponent";
import VerticalSpacer from "../../components/VerticalSpacer";
import LabelText from "../../components/LabelText";
import TextInput from "../../components/TextInput";

import Button from "../../components/Button";
import SocialButton from '../../components/SocialButton';
import VerticalCenterText from "../../components/VerticalCenterText";
import { ButtonsContainer, SocialIconContainer } from "./miniStyle";
import { makeStyles } from '@material-ui/core/styles';
import { theme } from "./theme";

import bgImage from "../../assets/images/mobileBg.png";
import vectorBg from "../../assets/images/VectorBg.png";
import logo from "../../assets/images/Logo.png"


const useStyles = makeStyles((theme) => ({
    onlyMobile: {
        [theme.breakpoints.down('sm')]: {
            justifyContent:'center',
            backgroundImage: `url(${vectorBg}), url(${bgImage})`,
            width: '100%',
            height: '100%',
          },  
    },
    onlyMobileForm: {
        [theme.breakpoints.down('sm')]: {
                paddingLeft:13,
                paddingRight:13,
                marginTop: -20,
                borderRadius: 16,
                zIndex: 100,
                backgroundColor: 'white'
            
        },  
    },
    desktopOnly: {
        [theme.breakpoints.down('sm')]: {
           display:'none'
        
    }, 
    },
    logoImageContainer: {
        [theme.breakpoints.down('sm')]: {
           top: 60,
           display:'flex',
           justifyContent: 'center',
           width: '100%',
           alignItems:'center',
           position: 'absolute'
        },  
    },
    logoImage: {
        [theme.breakpoints.down('sm')]: {
            alignSelf:'center'
         }, 
    }

    
  }));


export default function LoginPage() {

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const classes = useStyles();

  return (
    
        <LoginLayout>
            <Box className={classes.onlyMobile}>
                <Box className={classes.logoImageContainer} >
                <Avatar alt="logo" src={logo} className={classes.logoImage}/>
                </Box>
            
                <VerticalSpacer topSpace={100} bottomSpace={10} mobileTopSpace={0} mobileBottomSpace={10}>
                    <HeaderComponent                
                        title = "Welcome to our CRM. | Sign In to See latest Updates" 
                    />
                </VerticalSpacer>          
                <LabelText 
                theme={theme}
                title = "Enter your details to proceed further"
                />            
            </Box>
            <Box className={classes.onlyMobileForm}>
            <VerticalSpacer mobileOnly={true} topSpace={100} bottomSpace={10} mobileTopSpace={0} mobileTopPadding={20} mobileBottomSpace={10}>
            <TextInput theme={theme} name="email" title="Full name" placeholder="John.doe@gmail.com"/>
            </VerticalSpacer>
            <VerticalSpacer topSpace={100} bottomSpace={10} mobileTopSpace={0} mobileTopPadding={20} mobileBottomSpace={10}>
            <TextInput theme={theme} name="email" title="Email" placeholder="John.doe@gmail.com"/>
            </VerticalSpacer>
            <VerticalSpacer topSpace={50} bottomSpace={10} mobileTopSpace={0} mobileTopPadding={20} mobileBottomSpace={10}>
            <TextInput theme={theme} name="password" title="Password" placeholder="Start Typing..."/>
            </VerticalSpacer>
            <FormControl component="fieldset" className={classes.desktopOnly}>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Remember Me" />
                </RadioGroup>
            </FormControl>

            <VerticalSpacer topSpace={50} bottomSpace={10}>
            <ButtonsContainer>
                <Button title="Sign In" active={true} /> 
                <Button title="Sign Up" active={false} />
            </ButtonsContainer>
            </VerticalSpacer>
            <VerticalSpacer topSpace={50} bottomSpace={10}>
            <SocialIconContainer>               
                <SocialButton iconName="twitter" />
                <SocialButton iconName="facebook" />
                <SocialButton iconName="google" />
                <VerticalCenterText title="Or sign in with"/>    
            </SocialIconContainer>
            </VerticalSpacer>
            </Box>
        </LoginLayout>  
     
  );
}

