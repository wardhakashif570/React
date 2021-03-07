import React from 'react';
import ThemeToggler from './ThemeToggler';

function Header() {
    const headerStyle = {
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

    }
    return (
        <div>
            <h1 style={headerStyle} >
                <h1>Context Api Header</h1>
                <ThemeToggler />

            </h1>

        </div>
    )
}

export default Header
