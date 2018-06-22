import React from 'react'
import {Route,Switch } from 'react-router-dom'
import SettingsPart  from '../SettingsPart'
import WebPart  from '../WebPart'
import AddBookMark from '../Bookmark/addBookmark'
 
import EditeBookMark from '../Bookmark/editeBookmark'

export default class Apps extends React.Component{
    constructor(props){
            super(props);
            this.state={
                name: ''
            }
    }    
     
     render(){
           return (
               <div>
                    <div className="app">Hello {this.state.name} </div>
                                              
                      <Route exact  path= "/" component={WebPart}/>                       
                      <Route path= "/addBookMark"    component={AddBookMark} />
                      <Route   path= "/editeBookMark/:id"  render ={props=> <EditeBookMark {...props} /> } />
                      <Route  excact path="/settingsPart"  component={SettingsPart} />
                    
               </div>
                
           )
       }
   }