import React from 'react'
 


 const Bookmark= ({booktitle,bookurl,id})=>{
    return(
         
       <div className="bookmark">
          
           <h3 className="bookmark-title">{booktitle}</h3>
           <div className="bookmark-url">{bookurl}</div>
             <div> {id}</div>
       </div>
      )
    }

 export default Bookmark