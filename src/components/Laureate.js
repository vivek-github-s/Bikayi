import React from 'react';
import './Laureates.css';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';



  
function Laureate(props) {
  console.log(props)
  return <div className='laureates'>
      <l1>{props.laureate.firstname}-{props.laureate.surname}</l1>
  </div>
  
}

export default Laureate;
