import React from 'react'
import './setting.css'
import $ from 'jquery'


export default class Apperance extends React.Component{
     
    changeThemeBlack(e){
        const target=e.target.value;   
        $('.container').addClass("black-theme");
            
    }
    changeThemeWhite(e){        
        $('.container').removeClass("black-theme");    
        
    }

     render(){
        
          
      return (
               <div className="apper-blok">
                   
                      <h3>Themes</h3>
                    <div className="apper-changeThem"> 
                    <div className="apper-blok_black">         
                           <input type="radio" id="black-check" className="apper-blok_black" onClick={this.changeThemeBlack.bind(this)}  name="contact" value="black-theme"/>
                           <label >Black</label>
                      </div>  
                     <div className="apper-blok_white">
                            <input type="radio" id="white-check" className="apper-blok_white" onClick={this.changeThemeWhite.bind(this)} name="contact" value="white"/>
                            <label >White</label>
                     </div>
                      </div>    
                      <hr/>       
                </div>
                              
           )
       }
   }