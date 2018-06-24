import React from 'react'
const People= ({image,userName,peopleUrl,id})=>{
    return(
         
       <div className="bookmark">
           <img src={image}/>     
           <div className="userName">{userName}</div>
           <div className="people-url">{peopleUrl}</div>
           <div>{id}</div>
       </div>
      )
    }

 export default  People