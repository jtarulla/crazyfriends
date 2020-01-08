import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    // JSx code, similar to HTML syntax.
    <div className='tc bg-light-blue dib br3 pa0 ma2 grow bw2 shadow-5'>
      <img alt='friends' src={`https://robohash.org/size=50x50${name}?set=set5`} />
      <div> 
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
