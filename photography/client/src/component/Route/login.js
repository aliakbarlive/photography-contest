import React, { Component, useState } from 'react';
import Protect from './protected'
class About extends Component {
    constructor(props){
        super(props)
        this.state = {login:' you are Login the page',
             
     }
    }
    
    
    render() { 
        let [setIsBlocking,isBlocking]=useState(false)
        return (<div>   
            <form onSubmit={event=>{event.preventDefault()
            event.target.reset()
            setIsBlocking(false)
        }}>
            {/* <prompt when={isBlocking} message={location=>{`Are you sure ${Location.pathName}`}} /> */}
    {/* <p>
    {isBlocking ? "Yes Click a link or Back button" : "Nope"} </p> */}
            <input type =' text' onChange={event=>{event.target.value.length>0}} />
    <button> submit to stop block</button>
            </form>
           
        </div>  );
    }
}
 
export default About;