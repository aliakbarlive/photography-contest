import React from 'react';

const Home =(props)=>{
    // console.log(props)
    // setTimeout(() => {
    //   props.history.push('/')
    // }, 3000);
    return (
      <div>
        <h1>This is Home </h1>
        <a href='/auth/google'>open with google</a>
  
      </div>
    )
  }
  export default Home