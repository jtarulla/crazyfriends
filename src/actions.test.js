import * as actions from './actions';

import {
  CHANGE_SEARCHFIELD,
  REQUEST_FRIENDS_PENDING,
  REQUEST_FRIENDS_SUCCESS,
  REQUEST_FRIENDS_FAILED,
} from "./constants";

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search friends', () => {
  const text = 'wooo';
  const expectedtAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedtAction)
})

it('handles requesting friends API', () => {
  const store = mockStore();
  store.dispatch(actions.requestFriends());
  const action = store.getActions()
  const expectedtAction = {
    type: REQUEST_FRIENDS_PENDING
  }
  expect(action[0]).toEqual(expectedtAction)
})
