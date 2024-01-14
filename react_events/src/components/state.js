import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleIncrement = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Count : {count}</p>
        <button onClick={ this.handleIncrement }>+</button>
        <button onClick={ this.handleDecrement } disabled={ count===0 ? true : false }>-</button>
      </div>
    )
  }
}
