# React ✈️

# Parcel
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
 - [text](https://github.com/acdlite/react-fiber-architecture)

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
   - e.g. <Link to="path"></Link> , It's not making network call, all the components are already loaded into our app when I loaded at the first time.
   
   ### Server Side Routing 
   - e.g. <a href="path"></a> , it's making network call and loading whole page again.
