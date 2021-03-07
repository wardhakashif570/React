import React, { Component } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";

class Main extends Component{
    // constructor(){
    //     super();
    // }
    static contextType = ThemeContext;
    render(){
        const currentTheme = AppTheme[this.context[0]];
        return(
            <main style={{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.textColor}`,

            }}>
                <h1>Heading 1</h1>
                <p>This is a paragraph</p>
                <button> This is a button</button>
            </main>

        );
    }

}
export default Main;