import React from 'react';


class Signup extends React.Component {
    constructor(){
        super();
            this.state={
            name:"Wardha Kashif",
            email:"warda@email.com"
           
        }
    }

    update=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    render() {

        return (
            <div>

                <h1>Name Is:{this.state.name}</h1>
                <h1>Email Is:{this.state.email}</h1>
                <form>
                    <input type="text" name="name" placeholder="Enter your Name" onChange={(e)=>this.update(e)} />
                    <input type="email" name="email" placeholder="Enter your emial" onChange={(e)=>this.update(e)} />


                </form>


            </div>);
    }
}



export default Signup;