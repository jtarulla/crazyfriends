import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestFriends } from '../actions';
import './App.css';

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
 
  componentDidMount() {
    this.props.onRequestFriends()
  }

  render() {
    const { searchField, onSearchChange, friends, isPending } = this.props;
    const filteredfriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
    <h1 className='tc f1'>loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'> crazyfriends </h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList className='friends' friends={filteredfriends}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

// connect is a higher order function and returns another function (App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
