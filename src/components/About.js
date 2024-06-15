import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends Component{
  constructor(props){
    super(props);

    // console.log("Parent Constructor");
  }
  componentDidMount(){
    // console.log("Parent Mount");
  }
  render(){
    // console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        <UserClass name={"First"} location={"Prayagraj"}/>
        <User/>
      </div>
    )
  }
}

export default About
