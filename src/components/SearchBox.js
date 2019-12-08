import React from 'react';

const SearchBox = ( { searchChange } ) => {
  return(
    <div className='pa2'>
      <input
        className='b-green bg-lightest-blue pa3 ba shadow-5' 
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
      /> 
    </div>
  )
}

export default SearchBox