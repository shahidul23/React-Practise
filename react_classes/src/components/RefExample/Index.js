import React, { Component, createRef } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    this.userNameRef = createRef();
    this.state = {
       
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.userNameRef.current.value);
    this.userNameRef.current.style.backgroundColor = "green"
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor='name'> Name :</label>
            <input type='text' id='name' ref={this.userNameRef} />
        </div>
        <div>
            <label htmlFor='password'> Password :</label>
            <input type='password' id='password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
export default Index