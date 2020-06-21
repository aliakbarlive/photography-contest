import React from 'react';

const About =(props)=>{
    return ( <div>
      <h1>This is About </h1>
    <button onClick={()=>{props.history.push('/')}}>Back to Home</button>
    </div>
    )
  }
  export default About