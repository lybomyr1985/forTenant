import React from 'react';
import {Fragment} from 'react'

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
           bookmarks: [],
           forSearch: [],
           showTitle: true
        }

    }/*
  shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate'+nextProps+nextState);
       
  return(nextState.bookmarks ==this.state.bookmarks)
            } */
  
     componentDidMount(){
         const searchUrl=window.location.search.toString().slice(1,window.location.search.length);
       //  if(searchUrl=='') {searchUrl=true;}
         
         console.log('searchUrl='+searchUrl);

     const prevBookmark=this.state.bookmarks;
     
     database.ref().child('bookmarks').on('child_added', snap=>{   
       console.log(' snap.key'+  snap.key)
          prevBookmark.push({
                booktitle: snap.val().booktitle,
                bookurl: snap.val().bookurl, 
                id:snap.key
             }) 
           this.setState({
                 bookmarks: prevBookmark,
                 forSearch: prevBookmark,
                 showTitle:searchUrl
              })
          }) 
            console.log('prevBookmark'+prevBookmark);
             
     }
    componentWillUnMount() {
        console.log(  database.ref().off());
        database.ref().off();
         
    }  

     handleInSearch(e){
         const forS=this.state.forSearch;
         console.log('forS'+forS);
        const searchQuery=e.target.value.toLowerCase();
        const displayBookmark=forS.filter( item=>{
             console.log('bookmark.booktitile'+item.booktitle); 
      const searchString=item.booktitle.toLowerCase();
      return searchString.indexOf(searchQuery)!==-1;
  })
  this.setState({
     bookmarks:  displayBookmark
                  
      }) 
     }
     render(){
    
     
         const books=this.state.bookmarks.map((item,index)=>{
             console.log('books', books);
            return(
                <div className="books-link"  key={index}>
                 <Bookmark 
                        booktitle={item.booktitle}
                        bookurl={item.bookurl}
                        id={item.id}
                 /> 
                 <Link className="edite-book_link" to={`/editeBookmark/${item.id}`} >Edite </Link>
                </div>
            )
        }); 
           return (
        <div>
              <div className="head" >
                        <h1 className="web">Website Page Part</h1>   
                        <div className="logo"> <img className="logo-img" src={'https://firebasestorage.googleapis.com/v0/b/tenanttask.appspot.com/o/image%2FZ_logo.png?alt=media&token=3819d48a-c7ed-4600-8f0f-0252768a3a52'}/> </div>
                        <div className="search-bookmarks">
                            <input type="text" onChange={this.handleInSearch.bind(this)}/> 
                        </div>  
                      <div>  <Link className="settingsPart" to={'/settingsPart'}> <h1 >Settings</h1></Link></div>
                        <hr/>
              </div>
                   
              <div className="books" >
                  
                  {!this.state.showTitle?books:null} </div>
                <Link className="addBookMark" to={'/addBookMark'}><h3>Create bookmark</h3></Link> 
             </div>
                
           )
       }
   }