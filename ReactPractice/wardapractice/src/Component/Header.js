import React from 'react';
import '../App.css';
import LOGO from '../Component/Images/download.jpg';

class Header extends React.Component{
    render(){
      return(<div className="header">
        <h1>Hello from header Component made by {this.props.name}</h1>
    
    <button onClick={()=>this.props.get_data("fariha")}></button>

  
      </div>);
    }
  }


  class Logo extends React.Component{
      render(){
          return(<div>
            <img src={LOGO} alt=""/>
          </div>)
      }
  }

  export {
      Header,
      Logo
    };