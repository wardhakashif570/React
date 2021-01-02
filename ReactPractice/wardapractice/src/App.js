import './App.css';
import React from 'react';
import { Header, Logo } from './Component/Header';
import Footer from './Component/Footer';
//import Signup from './Component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Component/Signin';
import Parents from './Component/Parent';
import Statepractice from './Component/Statepractice';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from Wardha</h1>     
//     </div>
//   );
// }




class App extends React.Component {
  get_data(data){
    console.log(data);
}
  render() {
    // let name = "wardha";
    // let lastname="kashif";
    // let age = 21;
    // const fullname = name + "" + lastname;
    // let todos=[{"text":"wardha"},{"text":"sana"}];
    return (
      <div>
        <Header name="warda" get_data={this.get_data}/>

        <Statepractice />

        {/* <h1 style={{ backgroundColor: "red" }}>Main Component</h1>
        <h2 style={{ backgroundColor: "greenyellow", fontSize: 25 }}>I will practice React as much as Possible</h2>
        <img src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg" alt="" width="200px" /> */}

        <Signin />

        <Logo />

        {/* <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button> */}


        {/* <Signup /> */}
        <Parents/>





       




















        {/* <h1>{`Hello from ${name}`}</h1>
        <h2>{`My age is ${age}`}</h2>
        <h3>{`My fullname is ${fullname}`}</h3>

        <ul>
         {todos.map((item,index)=>{
          return <li key={index}>{item.text}</li>
        })}
           </ul> */}

        <Footer />

      </div>
    );
  }

}

export default App;
