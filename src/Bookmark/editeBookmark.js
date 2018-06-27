import React from 'react'
 import $ from 'jquery'
import {Link} from 'react-router-dom'
  import {database} from '../Firebass/db_config'
  import { Button,Input } from 'reactstrap';
 

export default class EditeBookMark extends React.Component{
    constructor(props){
        super(props); 
      this.state={
            booktitle: '',
            bookurl: ''
         }
 
     }
    componentDidMount() {
       
        this.fire = database.ref().child('bookmarks')
        const prevEditeBookmark=this.state.editebookmarks;
      
      
       
        database.ref().child(`bookmarks/${this.props.match.params.id}`).on('value', snap=>{   
           
              this.setState({
                     booktitle: snap.val().booktitle,
                     bookurl: snap.val().bookurl, 
                     id:snap.key
                  }) 
                 
               })             
      }


 handleSubmit(event){
    const valEmtyString="*Empty area is not allow";
    const valIncorUrl="*Incorrect url";
     //event.preventDefault();
    
     const booktitle=this.editeinputT.value;
    const bookurl=this.editeinputU.value;
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
  
     database.ref().child(`bookmarks/${this.props.match.params.id}`)
                        .update({
                            booktitle: this.editeinputT.value, 
                            bookurl:this.editeinputU.value
                            });    
       this.props.history.push('/'); 
                        }
  }
onChangeT(value){
    this.setState({
        booktitle: value
   });
}
onChangeU(value){
    this.setState({
        bookurl: value
   });
}


     render(){
       const bbb=this.state.booktitle;
       /*  
                   <label> BookMark Title<input type="text"  value={this.state.booktitle} ref={input=>this.editeinputT=input} onChange={e=>this.onChangeT(e.target.value)}    /> <br/><br/></label>
                   <label>BookMark Url <br/> <input type="text" value={this.state.bookurl} ref={input=>this.editeinputU=input} onChange={e=>this.onChangeU(e.target.value)}   /></label><br/><br/>
                       <button onClick={this.handleSubmit.bind(this)}>Add </button>
                    <br/>
                        
                    <button ><Link  to={'/'}>Cancel</Link>     </button>*/
/**/
           return (
               <div>
                    <h3>Edite BookMark</h3><br/><br/>
                    <div className="base-addBookmark">
                    New BookMark<br/><br/>
                    
                   <div > 
                        <div>BookMark Title</div>
                       <input type="text"  value={this.state.booktitle} ref={input=>this.editeinputT=input} onChange={e=>this.onChangeT(e.target.value)} /> 
                        <div className="validTitle"> </div>
                  </div>  
                    <div>
                     <div>BookMark Url</div> 
                       <input type="text" value={this.state.bookurl} ref={input=>this.editeinputU=input} onChange={e=>this.onChangeU(e.target.value)} />
                      <div className="validUrl"> </div>
                   </div>
                    <br/>
                      <Button color="secondary" ><Link  to={'/'}>Cancel</Link>     </Button> 
                      <Button color="success" className="butt-addBook" onClick={this.handleSubmit.bind(this)}>Send</Button>        
                    
               </div>
               </div>
                
           )
       }
   }