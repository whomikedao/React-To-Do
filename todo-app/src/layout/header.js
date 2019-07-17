//STEP 28: CREATE HEADER
import React from 'react';
//STEP 48: Import link from react-router-dom because we can't simply just a tags
import { Link } from 'react-router-dom';

//STEP 49: Add the links to the header
    //also add the link style cause that shit is ugly
    //now we're pretty much done with the page. Go to App.js to see for continuation with APIs
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;