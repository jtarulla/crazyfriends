import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

const mockProps = {
  onRequestFriends: jest.fn(),
  friends: [{
    id: 1, 
    name: 'Kristina Doe',
    username: 'Kristi',
    email: 'kristinadoe@email.com'
  },
  {
    id: 2, 
    name: 'John Doe',
    username: 'John-O',
    email: 'johndoe@email.com'
  }],
  searchField: 'K',
  isPending: true
}

let wrapper = shallow(<MainPage {...mockProps}/>)

it('renders MainPage component', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters friends properly', () => {
  expect(wrapper.instance().filteredFriends()).toEqual([{
    id: 1, 
    name: 'Kristina Doe',
    username: 'Kristi',
    email: 'kristinadoe@email.com'
  }])
})

