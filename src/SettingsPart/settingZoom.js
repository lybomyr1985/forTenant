import React from 'react'
 import $ from 'jquery'
import './setting.css'
 
 export default class ChangeZoom extends React.Component{
    ChangeZoom(e){
   
        switch (e.target.value) {
            case 'z75':{
     
                  $('.container').addClass(e.target.value);
                  $('.container').removeClass('z100');
                  $('.container').removeClass( 'z150');
              }
              break;
            case 'z100': {
               
                  $('.container').addClass(e.target.value);
                  $('.container').removeClass('z75');
                  $('.container').removeClass('z150');
              }
              break;
            case 'z150':{
               
                  $('.container').addClass(e.target.value);
                  $('.container').removeClass('z75');
                  $('.container').removeClass( 'z100');
              }
              break;
            default:
              alert( 'Я таких значений не знаю' );
          }	
                 
    }    
     render(){
             return (
               <div className="apper-zoom">
               <div> Page zoom size </div>
               <div className="selectZoom">
               <select   onChange={this.ChangeZoom.bind(this)}>
                    <option value="z75">75%</option>
                    <option value="z100">100%</option>
                    <option value="z150">150%</option>
             </select>
             </div>
                </div>
            
                
           )
       }
   }