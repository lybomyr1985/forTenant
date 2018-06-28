import React from 'react'
 

const People= ({img,userName,email,id})=>{
    return(
         
       <div className="book-people">
           <img className="avatar" src={img}/>   
           <div className="atr-people">  
                <div className="userName">{userName}</div>
                <div className="people-url">{email}</div>
           
           
           </div>
           <div className="people-id">{id}</div>
       </div>
      )
    }

 export default  People