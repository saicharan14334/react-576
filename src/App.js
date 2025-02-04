// import React from "react";

// function App() {
//   // let e= React.createElement("div",{className:"App"}, 
//   //   React.createElement("h1",null,"hi"))
//   let u= "aaa";
//   return (
//     // <div className="App">
//     //   <h1>hello</h1>
//     // </div>
//     // <section>
//     //   <h1>hello</h1>
//     // </section>
//     <div>
//     <h1>{u}</h1>
//     <p>{100-9}</p>
//     </div>
    
//   );
// }

// export default App;

//cbc
// class App extends React.Component{
//   render(){
//     return(
//       <h1>hi</h1>
//     )
//   }
// }
// export default App();

//fbc
// function App(){
//   return(
//     <h1>hi</h1>
//   )
// }
// export default App();
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Main from "./components/Main";
import Sidebar1 from "./components/Sidebar1";
import Footer from "./components/Footer";
import Sidebar2 from "./components/Sidebar2";
export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Main/>
        <div className="sidebar">
          <Sidebar1/>
          <Sidebar2/>
        </div>
        <Footer/>


      </div>
    )
  }
}

export default App