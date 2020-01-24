import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render Card List component', () => {
  const mockFriends = [{
    id: 1,
    name: 'Elon Snow',
    username: 'snowsnow',
    email: 'esnow@gmail.com'
  }]
  expect(shallow(<CardList friends={mockFriends}/>)).toMatchSnapshot();
})
