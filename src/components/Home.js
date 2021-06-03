import React from 'react'
import {Link } from "react-router-dom";
function Home() {
    return (
        <div 
        
style={{ 
    
position:"relative",
  backgroundImage: "url(" + "/starwar3.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height:'100vh',
  width:'100vw'
}}
>
    <img src="./coollogo.png" alt="" style={{ position:"absolute" }}
    />
   <Link className="animate-bounce text-2xl"style={{ color:"white",position:"absolute",top:"20rem", left:"25rem"
   }} to="/Product">Click here to view StarWar Characters</Link>

        </div>
    )
}

export default Home
