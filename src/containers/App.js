import React, { Component } from 'react';
import { connect } from 'react-redux';


import MainPage from '../components/MainPage';
import { setSearchField, requestFriends } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchFriends.searchField,
    friends: state.requestFriends.friends,
    isPending: state.requestFriends.isPending,
    error: state.requestFriends.error
  }
}

// to dispatch an action into the reducer
const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestFriends: () => dispatch(requestFriends())
})

class App extends Component {
 
  render() {
    return <MainPage {...this.props } />
  }
}

// connect is a higher order function and returns another function (App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
