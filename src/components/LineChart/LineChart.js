import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


export default function LineChartComponent(props) {
  
    return (
      <AreaChart width={690} height={380} data={props.data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="20%" stopColor="#5E81F4" stopOpacity={0.8}/>
      <stop offset="80%" stopColor="white" stopOpacity={0.4}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="white" stopOpacity={0.2}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#5E81F4" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    );
  }
