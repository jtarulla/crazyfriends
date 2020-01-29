import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';
import CounterButton from './CounterButton';
import './MainPage.css';


class MainPage extends Component {
  
  componentDidMount() {
    this.props.onRequestFriends()
  } 
  
  filteredFriends = () => {
    return this.props.friends.filter(friend => {
      return friend.name.toLowerCase().includes(this.props.searchField.toLowerCase())
  })}

  render() {
    const { onSearchChange, isPending } = this.props;
   
    return isPending ?
    <h1 id='loading-page' className='tc f1'>loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'> crazyfriends </h1>
        <CounterButton />
        <SearchBox searchChange={onSearchChange}/>
          <ErrorBoundry>
            <CardList friends={this.filteredFriends()}/>
          </ErrorBoundry>
      </div>
    )
  }
}

export default MainPage
