import React from 'react'
 import {Link} from 'react-router-dom'
 import {database} from '../Firebass/db_config'
import './index-p.css'
import $ from "jquery";
import { Button,Input } from 'reactstrap';

export default class AddPeople extends React.Component{
    constructor(props){
        super(props); 
      this.state={
           img: ''
         }
 
     }
    componentDidMount() {
        this.fire = database.ref().child('people')
      }
handleSubmitP(event){


 //event.preventDefault();
 const username=this.inputP.value;
const email=this.inputEP.value;
const img=this.state.img
const valEmtyString="*Empty area is not allow";
const valIncorUrl="*Incorrect e-mail";
 

 const patternP =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
 if(username==""){
     $('.validUserName').text(valEmtyString).css({color:'red'});
     $('.inTitleP').focus();
   
 }else if(username!==""){
    $('.validUserName').remove();
    $('.inTitleP').focus();
  
 }
  if(email==""){
     $('.validEmail').text(valEmtyString).css({color:'red'});
    $('.inPeople').focus() ;
 }else if(!patternP.test(email)){
    $('.validEmail').text(valIncorUrl).css({color:'red'});
    $('.inPeople').focus() ;
   
}else if(email!==""){
    $('.validEmail').remove();
    $('.inPeople').focus();
    console.log('Ok');
 console.log('State'+this.state.img );
 
this.fire.push({
    img: this.state.img,
    username: this.inputP.value,
    email: this.inputEP.value

})
 
this.props.history.push('/settingsPart'); 
}
}
   choseAvatar(e){
   var imgSrc=e.target;
 
   $(imgSrc).click(function (e) {
    $(this).addClass("clicAva").siblings().removeClass("clicAva");
    });
    
      this.setState({
         img: e.target.attributes.src.value
     })
          
      }

     render(){   
         
         return (
               <div>
                   <h3> New People</h3><br/><br/>
                   <h4> Виберiть аватар</h4>
               
                 <div className="avatar-block">  
                  <img  width="20%" onClick={this.choseAvatar.bind(this)} src= "https://firebasestorage.googleapis.com/v0/b/tenanttask.appspot.com/o/Avatar%2FTux%20Avatar%20(182).png?alt=media&token=dff049b7-cc2a-4ff2-b3df-1d87f1b14183"
                    alt="Card image cap" className="avatar-block_img" />
                 <img  width="20%" onClick={this.choseAvatar.bind(this)} src= "https://firebasestorage.googleapis.com/v0/b/tenanttask.appspot.com/o/Avatar%2FTux%20Avatar%20(253).png?alt=media&token=be201285-aeda-4205-8993-1500ee75499a"
                    alt="Card image cap" className="avatar-block_img"/>
                <img  width="20%" onClick={this.choseAvatar.bind(this)} src= "https://firebasestorage.googleapis.com/v0/b/tenanttask.appspot.com/o/Avatar%2FTux%20Avatar%20(491).png?alt=media&token=a66dead4-3121-46e3-b7e2-a4730c0e7a6f"
                    alt="Card image cap" className="avatar-block_img" />
                 <img  width="20%" onClick={this.choseAvatar.bind(this)} src="https://firebasestorage.googleapis.com/v0/b/tenanttask.appspot.com/o/Avatar%2FTux%20Avatar%20(532).png?alt=media&token=096a5795-01d6-49db-8974-bc4acb102e7d" 
                    alt="Card image cap" className="avatar-block_img"/>
                 <img  width="20%" onClick={this.choseAvatar.bind(this)} src= "https://firebasestorage.googleapis.com/v0/b/tenanttask.appspot.com/o/Avatar%2FTux%20Avatar%20(644).png?alt=media&token=65b6540d-d009-45cd-ab4b-d97e50ad6431"
                    alt="Card image cap" className="avatar-block_img" />

                </div>  
                <div> 
                 <div className="base-edite-input_people">
                <div > 
                        <div>UserName</div>
                        <input type="text"    className="inTitleP" ref={input=>this.inputP=input}/> 
                        <div className="validUserName"> </div>
                </div>  
                    <div>
                     <div>People e-mail</div> 
                      <input type="text"  className="inPeople" ref={input=>this.inputEP=input}/> 
                      <div className="validEmail"> </div>
                   </div>
                   </div>
                    <br/>
                    
                      <Button color="secondary" ><Link  to={'/'}>Cancel</Link>     </Button> 
                      <Button color="success" className="butt-addBook" onClick={this.handleSubmitP.bind(this)}>Send</Button>        
                    
               </div> 
               </div>
                
           )
       }
   }