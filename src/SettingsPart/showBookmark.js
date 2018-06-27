import React from 'react'
 
import './setting.css'
import $ from 'jquery'
//import Switch from '@material-ui/core/Switch';
import Switch from "react-switch";

export default class ShoewBoomarks extends React.Component{
  /*  state = {
        checkedA: true
         
      };
      handleChange = name => event => {
          console.log("dddddd");

        this.setState({ [name]: event.target.checked
         });
     $('.books').hide();
      };
      handleChangeC(){
        console.log($('.books'));
            $('.container').addClass('hidebook');  
         //   
      }*/
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
      /*hideBook(){
      
        $(window).load(function () {
             $('.books').addClass('hidebook');   
        });
      }*/
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