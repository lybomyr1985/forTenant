import React from 'react';


//import firebase from 'firebase/app';
import 'firebase/database';
//import {DB_CONFIG} from './Firebass/db_config' 
import Bookmark from './Bookmark/Bookmark'
import {database} from './Firebass/db_config'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

export default class WebbPart extends React.Component{
   
    constructor(props){
       super(props); 
     this.state={
           bookmarks: []
        }

    }
    
     componentDidMount(){
     const prevBookmark=this.state.bookmarks;
     
     database.ref().child('bookmarks').on('child_added', snap=>{   
       console.log(' snap.key'+  snap.key)
          prevBookmark.push({
                booktitle: snap.val().booktitle,
                bookurl: snap.val().bookurl, 
                id:snap.key
             }) 
           this.setState({
                 bookmarks: prevBookmark
              })
          }) 
            console.log('prevBookmark'+prevBookmark);
             
     }
     
     render(){
         const books=this.state.bookmarks.map((item,index)=>{
             console.log('books', books);
            return(
                <div key={index}>
                 <Bookmark 
                        booktitle={item.booktitle}
                        bookurl={item.bookurl}
                        id={item.id}
                 />
                 <Link to={`editeBookmark/${item.id}`} >Edite </Link>
                </div>
            )
        });
           return (
               <div>
                    <h1>Webb Part</h1>     
                    <Link to={'settingsPart'}> <h1>Settings</h1></Link>
                              {books}
                <Button variant="raised" color="primary"> <Link to={'/addBookMark'}>Add</Link></Button>
               </div>
                
           )
       }
   }