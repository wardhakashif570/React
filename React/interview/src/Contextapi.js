import React, { useState } from 'react'

function Contextapi() {
    const [theme, setTheme] = useState("red");

    let handleChange = () => {
        setTheme(theme === "red" ? "blue" : "red")
}
return (

    <div>
        <h1>Context Api Practice</h1>
        <button onClick={() => handleChange()}>Change Theme</button>
        <Text theme={theme}/>
    </div>
)
}

function Text({theme}) {
    return (
        <div>
        <h1 style={{color:`${theme}`}}>{theme}</h1>

        </div>
    )
}

export default Contextapi
