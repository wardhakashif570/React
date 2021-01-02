import React from 'react';

class Statepractice extends React.Component{
    constructor(){
        super();
        this.state={
            todos:"",
        }
    }

    update=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        
        return(<div>
            <h1>Todo</h1>
            <input type="text" name="todos" onChange={(e)=>this.update(e)}/>
            {this.state.todos}
      
        </div>);
    }
}
export default Statepractice;