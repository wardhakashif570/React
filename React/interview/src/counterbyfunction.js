import React,{ useState,useEffect } from 'react';

function CounterFunction() {
    let [count,setcount]=useState(0);
    // let [Age,setAge]=useState(20);

useEffect(()=>{
 document.title=`you click ${count} times`;
});

    return (
        <div>
           
            <h1>Counter App by Functional Component</h1>
            <button onClick={()=>setcount(count + 1)}>Increment</button>
            <button onClick={()=>setcount(count - 1)}>Deccrement</button>
            <button onClick={()=>setcount(count = 0)}>Reset</button>
            <h1>{count}</h1>
           
        </div>
    );
}

export default CounterFunction; 