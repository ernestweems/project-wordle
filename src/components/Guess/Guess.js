import React from 'react';

import { range } from '../../utils';


function Guess({value}) { 
   const word = value?.value;
  return (
  <p className='guess'>
      {range(5).map((obj) => (
        <span key={obj.id} className='cell'>
          {word ? word[obj] : undefined}
          </span>
      ))}
  </p>



      
  );
}

export default Guess;
