import React, {PureComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {     
    Grid, 
    Box,
    Typography,
   } from '@material-ui/core';
import PropTypes from 'prop-types';


import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  
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
   }
}));

export default function DashboardCard(props) {    
 
    const classes = useStyles();
    const sampleData = [5, 10, 5, 20, 8, 15]
    return ( 
        <Box style={{
            height: 110,
            marginTop:20,
            borderRadius: 6,
            backgroundColor:'white',
            width:'32%'}}>
            <Box style={{marginLeft:20, display:'flex'}}>
                <Box style={{marginTop:20}}>
                    <Typography className={classes.headerTextMain}>
                    $1.870
                    </Typography>
                    <Typography className={classes.headerText}>
                    Income Per Lead
                    </Typography>
                </Box>
                <Box>
                <LineChart width={150} height={100} data={props.data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
                </Box>
            </Box>
        </Box>
    );
}
