import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
  import {database} from '../Firebass/db_config'
 

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
     
     database.ref().child(`bookmarks/${this.props.match.params.id}`)
                        .update({
                            booktitle: this.editeinputT.value, 
                            bookurl:this.editeinputU.value
                            });    
       this.props.history.push('/');
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

           return (
               <div>
                    Edite BookMark<br/><br/>
                    
                   <label> BookMark Title<input type="text"  value={this.state.booktitle} ref={input=>this.editeinputT=input} onChange={e=>this.onChangeT(e.target.value)}    /> <br/><br/></label>
                   <label>BookMark Url <br/> <input type="text" value={this.state.bookurl} ref={input=>this.editeinputU=input} onChange={e=>this.onChangeU(e.target.value)}   /></label><br/><br/>
                       <button onClick={this.handleSubmit.bind(this)}>Add </button>
                    <br/>
                            {this.state.booktitle}
                    <button ><Link  to={'/'}>Cancel</Link>     </button>
               </div>
                
           )
       }
   }