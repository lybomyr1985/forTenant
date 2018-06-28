import React from 'react'
 import './setting.css'
import $ from 'jquery'
//import Switch from '@material-ui/core/Switch';
import Switch from "react-switch";

export default class ShoewBoomarks extends React.Component{
   
      constructor() {
        super();
        this.state = {
            name:"Che",
            checked: false 
            };
        this.handleChange = this.handleChange.bind(this);
        this.hideBook = this.hideBook.bind(this);
      }
     
      handleChange(checked) {
          console.log(this.state.checked.toString());
        this.setState({ 
            checked,
          
        });     
     
      }
     
     render(){
        
          
      return (
               <div className="apper-switch">
                    <div>Show bookmarks {this.state.checked}</div>
                        <label htmlFor="normal-switch">
                        <span>Switch with default style</span>
                              <Switch 
                          
                                onChange={this.handleChange}
                                checked={this.state.checked}
                                id="normal-switch"
                              />
                      </label>
             
                </div>
            
                
           )
       }
   }