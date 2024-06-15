//Class Based Components

import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy",
            }
         };
        //  console.log("Constructor");
    }
    async componentDidMount(){
        //API Call
        const data = await fetch("https://api.github.com/users/sandipkushwaha20");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        // console.log(json);
        // console.log("componentDidMount");

    }

    componentDidUpdate(){
        // console.log("comDidUpdate");
    }
    
    componentWillUnmount(){
        // console.log("Unmount"); //It will called when I will leave this pge
    }

    render() {

        const {name , location , avatar_url} = this.state.userInfo;
        // console.log("render");
        // debugger;
        return( 
        <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h2>Contact: sandipkushwaha2437@gmail.com</h2>
        </div>
        )
    }
}

export default UserClass;

