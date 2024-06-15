import { useEffect } from "react";
const User = () =>{
    useEffect(() =>{
        const timer = setInterval(() =>{
            console.log("Intercal Called");
        },100);
        return () =>{
            clearInterval(timer);
            console.log("useEffect return");
        };
    },[])

    return <div className="user-card">
        {/* <h2>Name: Sandip Kushwaha</h2>
        <h3>Location: Prayagraj</h3>
        <h2>Contact: sandipkushwaha2437@gmail.com</h2> */}
    </div>
}
export default User;