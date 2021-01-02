import React from 'react';
import Nav from './Nav';
import '../App.css';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            value: ''
        }
    }

    add_todo = () => {
        let obj={title:this.state.value};
        this.setState({
            todos:[...this.state.todos,obj],
            value:''
        })
    }

    edit_todo = (i,v) => {
   this.state.todos[i].edit='true';
   this.setState({
       todos:this.state.todos
   })
    }

    update=(i)=>{
        this.state.todos[i].edit=false;
        this.setState({
            todos:this.state.todos
        })
    
    }

    delete_todo = (i) => {
    this.state.todos.splice(i,1)
    this.setState({
        todos:this.state.todos
    })
    }

    handlechange=(e,i)=>{
        this.state.todos[i].title=e.target.value;
        this.setState({
            todos:this.state.todos
        })
    
    }
    
    render() {
        let { todos, value } = this.state;
        return (

            <div className="todo">

                <Nav />
                <h1>Todo App React</h1>
                <input type="text" value={value} placeholder="Enter Todo App" onChange={(e) => this.setState({ value: e.target.value })} />
                <button onClick={()=>this.add_todo()}>Add Todo</button>

                <ul>
                    {todos.map((v,i)=>{
                     return <li key={i}>
                     {v.edit?<input type="text" value={v.title} onChange={(e)=>this.handlechange(e,i)}/>:v.title}
                     {v.edit?<button onClick={()=>this.update(i)}>UPDATE</button>
                    :
                    <button onClick={()=>this.edit_todo(i,v.title)}>Edit</button>
                    }
                    <button onClick={()=>this.delete_todo(i)}>Delete</button>
                     </li>
                    })}
                    
                </ul>


            </div>


        )
    }
}

export default About;