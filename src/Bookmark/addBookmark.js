import React from 'react'
import { Button, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
  import {database} from '../Firebass/db_config'
 import $ from 'jquery'

export default class AddBookMark extends React.Component{
  
    componentDidMount() {
        this.fire = database.ref().child('bookmarks')
      }
      componentWillUnMount() {
       fire.ref().off();
         
    }
handleSubmit(event){
const valEmtyString="*Empty area is not allow";
const valIncorUrl="*Incorrect url";
 //event.preventDefault();

 const booktitle=this.inputT.value;
const bookurl=this.inputU.value;
 const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
 console.log(booktitle,bookurl);
 if(booktitle==""){
     $('.validTitle').text(valEmtyString).css({color:'red'});
     $('.inTitle').focus();
     console.log('validTitle');
     console.log($('.validTitle'));
     return false
  
 }else if(booktitle!==""){
    $('.validTitle').remove();
    $('.inTitle').focus();
    console.log('Ok');
 }
  if(bookurl==""){
     $('.validUrl').text(valEmtyString).css({color:'red'});
    $('.inBookmark').focus() ;
 }else if(!pattern.test(bookurl)){
    $('.validUrl').text(valIncorUrl).css({color:'red'});
    $('.inBookmark').focus() ;
   
}else if(bookurl!==""){
    $('.validUrl').remove();
    $('.inBookmark').focus();
    console.log('Ok');
    
   this.fire.push({
    booktitle:booktitle,
    bookurl:bookurl
})
this.props.history.push('/');
 }
 
 
  /*
 */
}
     render(){
         
           return (
               <div className="base-addBookmark">
                    New BookMark<br/><br/>
                    
                   <div > 
                        <div>BookMark Title</div>
                        <input type="text"    className="inTitle" ref={input=>this.inputT=input}/> 
                        <div className="validTitle"> </div>
                  </div>  
                    <div>
                     <div>BookMark Url</div> 
                      <input type="text"  className="inBookmark" ref={input=>this.inputU=input}   /> 
                      <div className="validUrl"> </div>
                   </div>
                    <br/>
                      <Button color="secondary" ><Link  to={'/'}>Cancel</Link>     </Button> 
                      <Button color="success" className="butt-addBook" onClick={this.handleSubmit.bind(this)}>Send</Button>        
                    
               </div>
                
           )
       }
   }