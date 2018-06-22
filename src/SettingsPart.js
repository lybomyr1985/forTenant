import React from 'react'
import {Link} from 'react-router-dom'

export default class SettingsPart extends React.Component{
    
     
     render(){
           return (
               <div>
                    <h1>Settings Part </h1>             
                    <Link to={'/'}> <h1>Back</h1></Link>
               </div>
                
           )
       }
   }