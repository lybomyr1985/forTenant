import React from 'react'
 import $ from 'jquery'
import './setting.css'
 
 
 

export default class ChangeFont extends React.Component{
    ChangeFont(e){
   
        switch (e.target.value) {
            case 'small':{
     
                  $('.container').addClass(e.target.value);
                  $('.container').removeClass('large');
                  $('.container').removeClass( 'med');
              }
              
              break;
            case 'med': {
               
                  $('.container').addClass(e.target.value);
                  $('.container').removeClass('large');
                  $('.container').removeClass('small');
              }
              break;
            case 'large':{
               
                  $('.container').addClass(e.target.value);
                  $('.container').removeClass('med');
                  $('.container').removeClass( 'small');
              }
              break;
            default:
              alert( 'Я таких значений не знаю' );
          }	
           
    }
     render(){
          return (
             <div className="apper-fontsize">
                  <div> Font size </div>
               <div className="selectFont">
               <select   onChange={this.ChangeFont.bind(this)}>
                    <option value="small">Small</option>
                    <option value="med">Meduim</option>
                    <option value="large">Large</option>
             </select>
               </div>
             </div>
            
                
           )
       }
   }