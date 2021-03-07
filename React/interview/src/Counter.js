import React  from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
}
    Increment=()=>{
        this.setState({
            count: this.state.count + 1,
        });
    }
    Decrement = () => {
      this.setState({
        count: this.state.count - 1
      });
    };

    Reset = () => {
      this.setState({
        count: 0
      });
    };
  
  render() {
    return ( <div>
        <h1>Counter App by Class component</h1>
        
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Deccrement</button>
        <button onClick={() => this.Reset()}>Reset</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;