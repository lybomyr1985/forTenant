import React from 'react'
 import {Link} from 'react-router-dom'
 import {database} from '../Firebass/db_config'
import './index-p.css'
import $ from "jquery";

export default class EditePeople extends React.Component{
    constructor(props){
        super(props); 
      this.state={
           img: '',
           url:'',
           username:''
           
         }
 
     }
    componentDidMount() {

        
        database.ref().child(`people/${this.props.match.params.id}`).on('value', snap=>{   
           
            this.setState({
                   img: snap.val().img,
                   url: snap.val().url, 
                   username:snap.val().username,
                   id:snap.key
                }) 
               
             })       
      }
 
handleSubmitP(event){
     
    database.ref().child(`people/${this.props.match.params.id}`)
                       .update({
                           img:this.state.img,
                           username: this.editeinputP.value, 
                           url:this.editeinputEP.value
                           });    
      this.props.history.push('/settingsPart'); 
                       /* */      }

onChangeP(value){
   this.setState({
       username: value
  });
  console.log(this.state.url);
}
onChangeU(value){
   this.setState({
       url: value
  });
  console.log(this.state.username);
}
   choseAvatar(e){
   var imgSrc=e.target;
 
   $(imgSrc).click(function (e) {
    $(this).addClass("clicAva").siblings().removeClass("clicAva");
    });
    console.log('e.target[i]'+ $(imgSrc))   
 

 
//imgSrc.classList.add("clicAva");

     this.setState({
         img: e.target.attributes.src.value
     })
          
      }

     render(){   
   
           return (
               <div>
                    New People<br/><br/>
                     <label> Виберыть аватар</label>
               
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

                <label>User Name <input type="text" ref={input=>this.editeinputP=input} value={this.state.username}  onChange={e=>this.onChangeP(e.target.value)} /> <br/><br/></label>
                <label>User e-mail <br/> <input type="text" ref={input=>this.editeinputEP=input} value={this.state.url} onChange={e=>this.onChangeU(e.target.value)}  /></label><br/><br/>
                       <button onClick={this.handleSubmitP.bind(this)}>Add </button>
                    <br/>
                            
                    <button ><Link  to={'/'}>Cancel</Link>     </button>
               </div>
                
           )
       }
   }