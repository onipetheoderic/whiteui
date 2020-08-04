import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default function DashLineChart(props){
 
  
    return (
      <LineChart
        width={330}
        height={380}
        data={props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
      
        <XAxis dataKey="name" />
      
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#5E81F4" strokeDasharray="5 5" />
      </LineChart>
    );
  }

