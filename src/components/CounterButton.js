import React, {Component} from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  render() {
    return (
      <button
        id='counter'
        className='b-green bg-washed-green  br-pill pa2 ba shadow-3' 
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Counter: {this.state.count}
      </button>
    );
  }
}

export default CounterButton