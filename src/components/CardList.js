import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
    // Keys help React identify which items have changed, are added, or are removed.    
  return (
    <div>
      {
        friends.map((user, i) => {
          return (
          <Card 
            key={friends[i].id}
            id={friends[i].id} 
            name={friends[i].name} 
            email={friends[i].email}
            username={friends[i].username}
          />
          );
        })
      }
    </div>
  )
}


export default CardList