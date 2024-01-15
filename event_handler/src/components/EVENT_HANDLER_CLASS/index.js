import React, { Component } from 'react'

class EVENT_HANDLER_CLASS extends Component {
  
//   handleClick = () =>{
//     console.log("click here")
//   }
  
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue: ''
    }
  }
  

  handleOnChange = (e) =>{
    this.setState({
        changedValue: e.target.value
    },()=>{
        console.log(this.state.changedValue)
    })
  }
  render() {
    const { changedValue } = this.state;
    return (
      <div>
       {/* <button onClick={this.handleClick}>Click Me</button> */}
       <input type='text' onChange={this.handleOnChange}/>
       <p>Change Value : {changedValue}</p>
      </div>
    )
  }
}
export default EVENT_HANDLER_CLASS;
