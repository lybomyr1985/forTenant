import React from 'react' 
import './setting.css'
import $ from 'jquery'


export default class Resset extends React.Component{
     
  
   resetSettings(e){        
        $('.container').removeClass("black-theme");    
        $('.container').removeClass("large");  
        $('.container').removeClass( "small");  
        $('.container').removeClass("z75" );   
        $('.container').removeClass( "z100" ); 
        $('.container').removeClass(  "z150");    
    }

     render(){        
      return (
               <div >
                  <button onClick={this.resetSettings.bind(this)} >Reset</button>
                  <p>Restore settings to their original defaults</p>

                </div>
                      
                
           )
       }
   }