import React from 'react'
import {Link} from 'react-router-dom'
import './setting.css'
import {database} from '../Firebass/db_config'
import People  from '../People/People'
 import Apperance from './apperance'
 import ApperSwitch from './showBookmark'
 import Switch from "react-switch"
 import ChangeFont from './settingFontsize'
  import ChangeZoom from './settingZoom'
  import scrollToComponent from 'react-scroll-to-component'
import Print from './SettingsPrint'
import Reset from './settingReset'

export default class SettingsPart extends React.Component{
    
    constructor(props){
        super(props); 
      this.state={
            checked: true,
            people: []
         }
         this.handleChange = this.handleChange.bind(this);
     }
  /*   shouldComponentUpdate(nextProps, nextState){
       console.log('shouldComponentUpdate'+nextProps+nextState);
    
  return(nextState.people ==this.state.people)
            } */
            handleChange(checked) {
                console.log(this.state.checked.toString());
              this.setState({ 
                  checked,
                
              });  }
      componentDidMount(){
      const prevPeople=this.state.people;
      scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
      
      database.ref().child('people').on('child_added', snap=>{   
        console.log(' snap.key'+  snap.key)
           prevPeople.push({
                 img: snap.val().img,
                 userName: snap.val().username, 
                 email: snap.val().email,
                 id: snap.key
              }) 
            this.setState({
                  people: prevPeople
               })
           }) 
      //  console.log('cond'+cond);
              
      }
      componentWillUnMount() {
        database.ref().off();
         
    }
     
     render(){
        const people=this.state.people.map((item,index)=>{
         console.log('people', item.image);
           return(
               <div className="people-link" key={index}>
                <People 
                        img={item.img}
                        userName={item.userName}
                        email={item.email}
                        id={item.id}
                />
                <Link className="people-link_edite" to={`editePeople/${item.id}`} >Edite </Link>
               </div>
           )
       });
           return (
               <div className="container-settings">
                    <h1>Settings Part </h1> 
                      

                  {!this.state.checked? <Link to={'/'+`?${this.state.checked.toString()}`}> <h1>Back</h1></Link>:<Link to={'/'}> <h1>Back</h1></Link>}
                 
                  <div className="settings-all"> 
                  <div className="settings-nav">
                           <span onClick={() => scrollToComponent(this.People, { offset: 0, align: 'top', duration: 1500})}> People </span><br/>
                           <span onClick={() => scrollToComponent(this.Apperance, { offset: 0, align: 'top', duration: 1500})}> Apperance </span><br/>
                           <span onClick={() => scrollToComponent(this.Printing, { offset: 0, align: 'top', duration: 1500})}> Printing </span><br/>
                           <span onClick={() => scrollToComponent(this.Reset, { offset: 0, align: 'top', duration: 1500})}> Reset  </span><br/>
                    </div>
                    <div className="setting-tools">
                  <h3 className="people" ref={(section) => { this.People = section; }}>People</h3>
                  <div className="setting-people">
                       {people}
                       <Link className="man-people" to={'/addPeople'}><h3>Manage New People</h3></Link> 
                  </div>
               </div>
                    
                  </div> 
                  <h3 className="apperance" ref={(section) => { this.Apperance = section; }}>Apperance</h3>
                  <div className="setting-theme">
                  <div className="apperance">
                    <Apperance/>
                    </div>
                    <div className="setting-switch">
                         
                        <span>Show bookmarks</span>
                        <div  className="setting-switch_elem">
                                <Switch                  
                                    onChange={this.handleChange}
                                    checked={this.state.checked}
                                    id="normal-switch"
                                />
                        </div>
                       
                  </div>  <hr/>
                  <ChangeFont/>
                  <hr/>
                  <ChangeZoom/>
                  </div>
                  <h3 className="printing" ref={(section) => { this.Printing = section; }}>Printing</h3>
                  <div className="sett-print">
                        <Print/>
                  </div>
                  <h3 className="reset" ref={(section) => { this.Reset = section; }}>Reset</h3>
                  <div  className="sett-reset"> 
                         <Reset/> 
                  </div>
               </div>
                
           )
       }
   }