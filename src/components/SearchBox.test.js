import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('correctly searchs for new friends', () => {
  const searchBox = shallow(<SearchBox />)
  
  expect(searchBox.text()).toEqual('');

  searchBox.find('searchBox').simulate('change');

  expect(searchBox.state()).toEqual({count: 3});

})

// {"children": <input 
//   aria-label="Search Friends" 
//   className="b-green bg-lightest-blue br3 pa3 ba shadow-5" 
//   id="searchBox" 
//   placeholder="Search friends" 
//   type="search" />, 
//   "className": "pa2"
//   }