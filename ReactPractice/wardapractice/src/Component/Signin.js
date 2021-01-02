import React from 'react';

class Signin extends React.Component {


    constructor() {
        super();
        this.state = {
            name: "sana",
            email: "sana@gmail"
        }
    }

    changeOccur = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        
    }
    get_data(data){
        console.log(data);
    }
    render() {


        return (<div>

            <h1>{this.state.name}</h1>
            <h1>{this.state.email}</h1>
            <form>
                <input type="text" name="name" placeholder="Enter your name" onChange={(e) => this.changeOccur(e)} />
                <input type="email" name="email" placeholder="Enter your Email" onChange={(e) => this.changeOccur(e)} />
            </form>
        </div>);
    }
}

export default Signin; 