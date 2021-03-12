import React from 'react';
import './App.css';
import { connect } from 'react-redux';
// import {Increment,Decrement} from './store/action';

class App extends React.Component {

  render() {
    console.log("counter is",this.props)
    return (

      <div>
        
        <button onClick={()=>this.props.Increment()}>INCREMENT</button>
        <button onClick={()=>this.props.Decrement()}>DECREMENT</button>
        {/* <h1>{this.props}</h1> */}
      </div>)
  }
}
const mapStateToProps = (state) => ({

  counter: state.counter,
  name:"warda",

})

//  const mapDispatchToProps =(dispatch)=>({
// Increment:()=>dispatch(Increment()),
// Decrement:()=>dispatch(Decrement())
// })

export default connect(mapStateToProps,null)(App);
