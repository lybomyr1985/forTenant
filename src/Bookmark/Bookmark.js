import React from 'react'
 import './indexBook.css'


 const Bookmark= ({booktitle,bookurl,id})=>{
    return(         
       <div className="bookmark">
           <a href ={bookurl}><h3 className="bookmark-title">{booktitle}</h3></a>
           <div className="bookmark-url">{bookurl}</div>
           <div className="bookmark-id"> {id}</div>
       </div>
      )
    }

 export default Bookmark