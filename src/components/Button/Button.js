import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ActiveButton } from "./miniStyles";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  margin: {
    height: 56,
    borderRadius:8,
    textTransform:"capitalize",
    fontFamily:'Lato',
    width: '48%'
  },
  
}));

export default function RoundButton(props) { 
    
 
  const classes = useStyles();

  return ( 
   <ActiveButton active={props.active}>
       {props.title}
   </ActiveButton>
  );
}

RoundButton.propTypes = {
    title: PropTypes.string.isRequired,
}