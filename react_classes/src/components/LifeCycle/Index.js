import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    console.log("constructor");
    this.state = {
       count: 0,
    }
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }
  
  handleOnClick = () =>{
    this.setState({
        count: this.state.count + 1
    })
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleOnClick}>+</button>
      </div>
    )
  }
}
export default Index;
