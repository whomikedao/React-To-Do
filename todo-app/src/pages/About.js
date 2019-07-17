import React from 'react'
//STEP 41: This about page is going to be a function rather than a class
    //don't really need a div 
    //can use React.Fragment, it's kind of like a ghost
//STEP 42: Now we want to be able to make the about me into another page
    //to do that, we'd have to go to App.js and import the router dom and this page
    
function About() {
  return (
    <React.Fragment>
        <h1>About</h1>
        <p>This is the Todo App about section v1.0</p><br/>
        <p>
            {`I think using JSX might be better to do multiple lines kind of thing.
            So that I can just break lines without doing the <br> command`}
        </p>
    </React.Fragment>
  )
}


export default About;