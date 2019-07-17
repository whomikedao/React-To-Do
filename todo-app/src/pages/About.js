import React from 'react'
//STEP 41: This about page is going to be a function rather than a class
    //don't really need a div 
    //can use React.Fragment, it's kind of like a ghost

function About() {
  return (
    <React.Fragment>
        <h1>About</h1>
        <p>This is the Todo App about section v1.0</p>
    </React.Fragment>
  )
}


export default About;