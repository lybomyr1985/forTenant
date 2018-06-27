import React from 'react'
import {Route,Switch } from 'react-router-dom'
import SettingsPart  from '../SettingsPart/SettingsPart'
import WebPart  from '../WebPart'
import AddBookMark from '../Bookmark/addBookmark'
import AddPeople from '../People/addPeople' 
import EditeBookMark from '../Bookmark/editeBookmark'
import EditePeople from '../People/editePeople'
import './index.css'

export default class Apps extends React.Component{
   
     render(){
           return (
               <div className="container">
                   
                      <Route exact  path= "/" component={WebPart}/>                       
                      <Route path= "/addBookMark"    component={AddBookMark} />
                      <Route   path= "/editeBookMark/:id"  render ={props=> <EditeBookMark {...props} /> } />
                      <Route  excact path="/settingsPart"  component={SettingsPart} />
                      <Route path= "/addPeople"    component={AddPeople} />
                      <Route   path= "/editePeople/:id"  render ={props=> <EditePeople {...props} /> } />
               </div>
                
           )
       }
   }