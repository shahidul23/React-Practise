import React, { Component } from 'react';
import HomePage from './homePage';
import LoginPage from './loginPage';

class Conditional_Rendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    

  render() {
    const {isLoggedIn} = this.state;
    // if(this.state.isLoggedIn){
    //     return <HomePage />
    // }else{
    //     return <LoginPage />
    // }
    //let element;
    // if(isLoggedIn){
    //     element = <HomePage />
    // }else{
    //     element = <LoginPage />
    // }
    //element = isLoggedIn ? <HomePage /> : <LoginPage />
    // return(
    //     <div>
    //         {isLoggedIn ? <HomePage /> :<LoginPage />}
    //     </div>
    // )
    return(
        <div>
            {isLoggedIn && <HomePage /> && <LoginPage />}
        </div>
    )
  }
}
export default Conditional_Rendering;
