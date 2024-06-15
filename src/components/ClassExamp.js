//Class Based Components

// import React from "react";

// class ClassExamp extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//             count2: 1,
//          }

//          console.log(this.props.name + "Child constructor");
//     }
//     async componentDidMount(){
//         console.log(this.props.name + "Child Mount");

//     }
//     render() {
//         console.log(this.props.name + "Child Render");
//         const {name , location} = this.props;
//         const {count , count2} = this.state;
//         return <div className="user-card">
//         <h2>Count = {count}</h2>
//         <h2>Count2 = {count2}</h2>
//         <button onClick={() =>{
//             this.setState({
//                 count : this.state.count + 1,
//                 count2 : this.state.count2 + 1
//             })
//         }}>Count Increase</button>
//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//         <h2>Contact: sandipkushwaha2437@gmail.com</h2>
//     </div>
//     }
// }

// export default ClassExamp;






//Class Based Components

// import React from "react";

// class UserClass extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             userInfo: {
//                 name: "dummy",
//                 location: "dummy",
//             }
//          };
//          console.log("Constructor");
//     }
//      componentDidMount(){
        // this.timer = setInterval(() =>{
        //     console.log("Called");
        // }, 1000);
        // console.log("componentDidMount");
        
//         console.log("componentDidMount");

//     }

//     componentDidUpdate(){
//         console.log("comDidUpdate");
//     }
    
//     componentWillUnmount(){
//         clearInterval(this.timer);
//         console.log("Unmount"); //It will called when I will leave this pge
//     }

//     render() {

//         const {name , location , avatar_url} = this.state.userInfo;
//         console.log("render");
//         // debugger;
//         return( 
//         <div className="user-card">
//         <img src={avatar_url}/>
//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//         <h2>Contact: sandipkushwaha2437@gmail.com</h2>
//         </div>
//         )
//     }
// }

// export default UserClass;

