import React from 'react';
import './card.style.css';
export const Card=props=>(
    <div className='card-container'>
        <img 
        alt="monster" 
        src={'https://robohash.org/UJR.png?set=set2&size=180*180/${props.monster.id}'}
        />
         <h2>{props.monster.name}</h2>
         <p>{props.monster.email}</p>

    </div>
);