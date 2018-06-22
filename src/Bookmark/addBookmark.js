import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
  import {database} from '../Firebass/db_config'
 

export default class AddBookMark extends React.Component{
  
    componentDidMount() {
        this.fire = database.ref().child('bookmarks')
      }
handleSubmit(event){

 //event.preventDefault();
 const booktitle=this.inputT.value;
const bookurl=this.inputU.value;
 console.log(booktitle,bookurl);
this.fire.push({
    booktitle:booktitle,
    bookurl:bookurl
})

}

     render(){
           return (
               <div>
                    New BookMark<br/><br/>
                    
                   <label> BookMark Title<input type="text" ref={input=>this.inputT=input}    /> <br/><br/></label>
                   <label>BookMark Url <br/> <input type="text" ref={input=>this.inputU=input}   /></label><br/><br/>
                       <button onClick={this.handleSubmit.bind(this)}>Add </button>
                    <br/>
                            
                    <button ><Link  to={'/'}>Cancel</Link>     </button>
               </div>
                
           )
       }
   }