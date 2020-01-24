import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('correctly increments the counter', () => {
  const counterButton = shallow(<CounterButton />)
  expect(counterButton.props().id).toEqual('counter');
  
  expect(counterButton.state()).toEqual({count: 0});

  counterButton.find('button').simulate('click');
  counterButton.find('button').simulate('click');
  counterButton.find('button').simulate('click');

  expect(counterButton.state()).toEqual({count: 3});

})