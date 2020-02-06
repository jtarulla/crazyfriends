import { 
  CHANGE_SEARCHFIELD,
  REQUEST_FRIENDS_PENDING,
  REQUEST_FRIENDS_SUCCESS, 
  REQUEST_FRIENDS_FAILED, 
} from "./constants";

import * as reducers from './reducers';

describe('searchFriends', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return the initial state', () => {
    expect(reducers.searchFriends(undefined, {})).toEqual({searchField: ''})
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchFriends(initialStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'hello'
    })).toEqual({
      searchField: 'hello'
    })
  })
})

describe('requestFriends', () => {
  const initialStateFriends = {
    isPending: false,
    friends: [],
    error: ''
  }

  it('should return initial state', () => {
    expect(reducers.requestFriends(initialStateFriends, {
      type: REQUEST_FRIENDS_PENDING,
      payload: ''
    })).toEqual({
      error: '',
      friends: [],
      isPending: true
    })
  })

  it('should handle a success request', () => {
    expect(reducers.requestFriends(initialStateFriends, {
      type: REQUEST_FRIENDS_SUCCESS,
      payload: ['friend_1', 'friend_2']
    })).toEqual({
      error: '',
      friends: ['friend_1', 'friend_2'],
      isPending: false
    })
  })

  it('should handle failed request', () => {
    expect(reducers.requestFriends(initialStateFriends, {
      type: REQUEST_FRIENDS_FAILED,
      payload: 'Ooops, no friends yet!'
    })).toEqual({
      friends: [],
      error: 'Ooops, no friends yet!',
      isPending: true
    })
  })
})
