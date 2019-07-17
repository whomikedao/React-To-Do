import React from 'react';
//STEP 28: CREATE HEADER
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px'
}

export default Header;