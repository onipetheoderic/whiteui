import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {     
    Grid,
    InputAdornment, 
    FormControl,
    InputLabel,
    Input,
    Icon,
    TextField
   } from '@material-ui/core';
import { useStyles } from "./MaterialStyles/materialStyles";
import DraftsIcon from '@material-ui/icons/Drafts';
import LockIcon from '@material-ui/icons/Lock';
import clsx from 'clsx';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



export default function TextInput(props) {

   
    const { theme } = props
    const classes = useStyles(theme);
    const iconBool = props.name === "email" ? <DraftsIcon /> : <LockIcon />
    return (
        <div>
         <TextField
            label={props.title}
            onChange={props.handleChange}
            value={props.value}
            name={props.name}
            InputLabelProps={{
                shrink: true,
                classes: {
                    root: classes.labelRoot,
                }
            }}
            placeholder={props.placeholder}
            id="standard-start-adornment"
            className={clsx(classes.marginLabel, classes.textField)}
            InputProps={{
                endAdornment: <InputAdornment position="start">{iconBool}</InputAdornment>,
            }}
            
        />
      </div>
    )
}

TextInput.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    
}