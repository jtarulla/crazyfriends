import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // Keys help React identify which items have changed, are added, or are removed.    
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
          <Card 
            key={robots[i].id}
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
          />
          );
        })
      }
    </div>
  )
}


export default CardList