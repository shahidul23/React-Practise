import React, { Component } from 'react'

class EVENT_BINDING extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
    this.handleOnClineIncrement = this.handleOnClineIncrement.bind(this)
  }

  handleOnClineIncrement(){
    this.setState({
        count : this.state.count + 1
    })
  }
  handleOnClineDecrement(){
    this.setState({
        count : this.state.count -1
    })
  }
    
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Count Value: { count }</h1>
        <button onClick={this.handleOnClineIncrement}>Increment</button>
        <button onClick={this.handleOnClineDecrement.bind(this)} disabled={count === 0 ? true : false}>Decrement</button>
      </div>
    )
  }
}
export default EVENT_BINDING
