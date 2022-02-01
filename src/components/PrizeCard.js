import React from 'react';
import Laureate from './Laureate';
import './PrizeCard.css';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';

function PrizeCard(props ) {
  return (

      <div className='prizeContainer'>
        
        <Card className='card' variant="outlined" >
        
        <CardContent>
          <div>
            
            <span> {props.category.toUpperCase()}--{props.year}</span>
            {props.laureates && props.laureates.map(laureate=>{

            return <Laureate laureate = {laureate} ></Laureate>
            })}

          </div>
        </CardContent>
      </Card>
        

      </div>
  )
  
}

export default PrizeCard;
