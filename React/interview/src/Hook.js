import React, { useState } from 'react';
import './Hook.css';

function Hook() {
    const [Light,SetLight] = useState(true);
    return (
        <div>
            <button onClick={()=>SetLight(!Light)}>
         {Light ? 
         <h1 className="lit">"The room is light"</h1>  : <h1 className="dark">"The room is dark"</h1> }
         </button>
        </div>
    )
}

export default Hook;
