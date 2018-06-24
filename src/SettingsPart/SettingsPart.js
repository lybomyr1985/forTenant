import React from 'react'
import {Link} from 'react-router-dom'
import './setting.css'
import {database} from '../Firebass/db_config'
import People  from '../People/People'
 

export default class SettingsPart extends React.Component{
    
    constructor(props){
        super(props); 
      this.state={
            people: []
         }
 
     }
  /*   shouldComponentUpdate(nextProps, nextState){
       console.log('shouldComponentUpdate'+nextProps+nextState);
    
  return(nextState.people ==this.state.people)
            } */
     
      componentDidMount(){
      const prevPeople=this.state.people;
      
      database.ref().child('people').on('child_added', snap=>{   
        console.log(' snap.key'+  snap.key)
           prevPeople.push({
                 image: snap.val().img,
                 userName: snap.val().username, 
                 peopleUr: snap.val().url,
                 id: snap.key
              }) 
            this.setState({
                  people: prevPeople
               })
           }) 
         //    console.log('prevBookmark'+prevBookmark);
              
      }
      
     
     render(){
        const people=this.state.people.map((item,index)=>{
         console.log('people', item.id);
           return(
               <div key={index}>
                <People 
                        image={item.image}
                        userName={item.userName}
                        peopleUrl={item.peopleUr}
                        id={item.id}
                />
                <Link to={`editePeople/${item.id}`} >Edite </Link>
               </div>
           )
       });
           return (
               <div className="container-settings">
                    <h1>Settings Part </h1>             
                    <Link to={'/'}> <h1>Back</h1></Link>
                    <div className="settings-nav">
                           <span><a href="/people">People</a> </span><br/>
                           <span> <a href="/people">Apperance</a> </span><br/>
                           <span>  <a href="/people">Printing</a> </span><br/>
                           <span> <a href="/people">Reset</a> </span><br/>
                    </div>
                    <div className="setting-tools">
                       <h3>People</h3>
                       <div className="setting-people">
                            {people}
                            <Link to={'/addPeople'}>Manage New People</Link> 
                       </div>
                    </div>
               </div>
                
           )
       }
   }