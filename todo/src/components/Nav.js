import React from 'react';
import "../Nav.css";
import {
    
    Link,
} from "react-router-dom";


class Nav extends React.Component {
    render() {
        return (
            
                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                </div>
           
        );

    }
}
export default Nav;