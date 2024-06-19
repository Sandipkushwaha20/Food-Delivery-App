# React ✈️

# Parcel
- It's Basic application is bundling => bunles all the files and make a single file
- Dev Build
- Local Server
- HMR - Hot module Replacement
- File Watching algoritham - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistece Hashing
- Diffrencial Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code for you
- Different dev and production bundles

# Namaste Food

 ## Header
 *  - Logo
 *  - Navitems
 *  - Home
 *  - About
 *  - Cart
 *
 ## Body
 *  - search
 *  - RestaurantContainer
 *    - RestauractCard
 *     - img
 *     - Name of Res , star Rating,
 *     - cuisine, delevery time
 ## Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact

# Components
- Just JS function which return  JSX code.

 ## class based component(Older method)
  

``` javascript
      import React from "react";
       class UserClass extends React.Component {
          constructor(props){
          super(props);

           console.log(props);
        }
        render() {
            const {name , location} = this.props;
            return < div className="user-card">
            < h2>Name: {name}</ h2>
            < h3>Location: {location}</ h3>
            < h2>Contact: dummy@gmail.com</ h2>
        </ div>
          }
       }

   export default UserClass;
```

- It has a class which has render method, which return JSX code.
- We use it in same way like function based components e.g. 
``` javascript
   <UserClass />
```
## function based component(New Method)
  
``` javascript
    const User = () =>{
      return < div className="user-card">
            <h2>Name: Sandip Kushwaha</h2>
            < h3>Location: Prayagraj</ h3>
         < h2>Contact: dummy@gmail.com</ h2>
      </ div>
      }
   export default User; 
```
- It return JSX code.

 # Two Types of  Export/Import

 ## Default Export/Import

    export default Component;
    import Component from "path";


 ## Named Export/Import

    export const Component;
    import {Component} from "path";
 - Note: Can I use a default export along with named export ? -> YES 

# React Hooks
 - It is Normal JS utility funtions.
 ## Whenever state variable update, react triggers a reconciliation cycle(re-renders the component). 
 - [react-fiber](https://github.com/acdlite/react-fiber-architecture) 

 ## Hooks can only be called inside of the body of a function component not from outside.

 ## useState()
   - It is used to create Local State vaiable inside your  function component
   - Always try to call this hook on the top(just after component name) => It's a good practice and React will understand it properly
   - Never create your state variable inside if or else
      e.g. - if(const [name , setName] = useState()) => never do this, This is a valid JS code, Allowed to do it by JS, but this can create inconsistencies in your code.
## Never use your useState() Hook inside a condition or for loop or functions.

            call Back fun, dependency array(not mandatory)
 ## useEffect(() => {}  ,   [])
 - it will called after the your component is        renderd       

 ### if no dependency array => useEffect is called at every render
 - useEffect(() => {})

 ### if dependency array is empty = [] => useEffect is called on initial render(just once)
 - useEffect(() =>{} , [])

 ## if dependency array is [btnNameReact] => called everytime btnNameReact is upadated
  -useEffect(() => , [btnNameReact])



# rfce   (shortcut for component)


# Router

## 2 types of Routing in web apps
   ### Client Side Routing 
    ``` javascript
      <Link to="path"></Link> 
   ```
   - It's not making network call, all the components are already loaded into our app when I loaded at the first time.
   
   ### Server Side Routing 
    ``` javascript
      <a href="path"></a> 
   ```
   - It's making network call and loading whole page again.


# React Life Cycle Method

   -                    Mounting
   - "Render Phase"        |
   -                   Constructor
   -                       |
   -                    Render
   - *------------------------------------------------*
   -                 React updates DOM
   - "CommitPhase"         |
   -                 ComponentDibMount


   - Parent Constructor
   - Parent Render
      - 1st Constructor
      - 1st Render
      
      - 2nd Constructor
      - 2nd Render

      - 3rd Constructor
      - 3rd Render

   <DOM UPDATED - IN SINGLE BATCH>
      - 1st ComponentDibMount
      - 2nd ComponentDibMount
      - 3rd ComponentDibMount
   
   - Parent ComponentDibMount



/***
 * 
 * ------MOUNTING----
 * 
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML dummy>
 * Componet Did Mount
 *      <API Call>
 *      <this.setState -> State variable is updated 
 * --------UPDATE ---------
 * 
 *      render(API data)
 *      <HTML (new API data)> At this point user will see name , location
 *  component Did Update 
 *  
 * When I will leave the page the componentWillUnmount() will be called
 * 
 */

 ### Using the async keyword allows you to use the await keyword to wait for the promise to resolve before proceeding with the next line of code.



 # [Lifting State up in react](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)

 #  [Props drilling](https://react.dev/learn/passing-data-deeply-with-context#replace-prop-drilling-with-context)



 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector

  
  
  ``` javascript 
      //Vanialla(older) Redux => DON'T MUTATE STATE && returning was mendatory
      addItem: (state , action) => {
         const newState =  [...state]; 
         newState.items.push(action.payload);
         return newSatate;
         },
   ```


   

  #### Behind the seen Redux is using the Immer Libray to doing the same older version work
   ####  [Immer](https://immerjs.github.io/immer/)


   ####  [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query)


  ``` javascript
   import { createSlice } from "@reduxjs/toolkit";

   const cartSlice = createSlice({
      name: "cart",
      initialState: {
         items: [],
      },
      reducers: {
         addItem: (state , action) => {
                //Redux Toolkit returning is not mendatory
               //We have to mutate the state
               //In new Version directly mutate 
               //Mutation the satate here
               //Redux Toolkit use Immer Behind the seen
               state.items.push(action.payload);
         },
         removeItem: (state , action) =>{
               state.items.pop();
         },
         //originalState = ["Pizza"]
         clearCart:(state) =>{
               // if state = ["Sandip"] or [] It's not 
               //work bc you are not mutating the state  
               //you are just adding the refrece of it
               console.log(current(state)); // printing in redux
               state.items.length = 0; //originalState = [] 
                        OR
               return {item : []}; //this new [] wil be replaced inside originalState = []
         },
      }
   });

   export const {addItem , removeItem , clearCart} = cartSlice.actions;

   export default cartSlice.reducer;

 ``

#  Type of Testings(devloper) [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
 - Unit Testing
 - Integaration Testing
 - Ent to End Testing - e2e testing

 #### React Testing Library uses something known as JEST => JEST is uses Babel

 ### Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel
 - Configure Parcel Config to disable default babel transpilation
 - Jest Configuration(npx jest --init , it create a new file for jest)
 - Install Jsdom library
 - i @babel/preset-react to make jsx work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 - [Babel](https://parceljs.org/languages/javascript/#babel)

#### After npm run test command if you see  No tests found that means you successfully configure your react testing library Jest , Babel and Parcel