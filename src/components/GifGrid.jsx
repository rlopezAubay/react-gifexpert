import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10);

    useEffect( () => {
        getGifs( category );
    }, [] );

  return (
    <div>
        <h3>{ category }</h3>
        
        <h1>{ counter }</h1>
        <button onClick={() => setCounter(counter+1)}>contador</button>
    </div>
  )
}
