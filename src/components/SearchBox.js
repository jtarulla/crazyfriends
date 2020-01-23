import React from 'react';

const SearchBox = ( { searchChange } ) => {
  return(
    <div className='pa2'>
      <input
        aria-label='Search Friends'
        className='b-green bg-lightest-blue br-pill pa3 ba shadow-5' 
        type='search' 
        placeholder='Search friends' 
        onChange={searchChange}
      /> 
    </div>
  )
}

export default SearchBox