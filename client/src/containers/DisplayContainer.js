import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactList from '../components/contacts/ContactList';
import Puzzle from '../components/puzzles/Puzzle';
import ReminderList from '../components/reminders/ReminderList.js';
import Reminder from '../components/reminders/Reminder.js'
import Navigation from '../components/navigation/Navigation.js';
import {Link} from 'react-router-dom';
import PhotoSlider from '../components/photos/photo.js';
import ReminderSelect from '../components/reminders/ReminderSelect';
import '../App.css';

class DisplayContainer extends Component{
constructor(props){
    super(props);

  }



  render (){
  return (
    <div id="router">
  <div>
    <Router >
     <div>
       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/contacts" render={(props) => {
           return <ContactList contacts={this.props.data.contacts}/>
         }}>


          </Route>
         <Route path="/photos" component={PhotoSlider} >

          </Route>
          <Route path="/puzzles" component={Puzzle}>

           </Route>
           <Route path="/reminders" render={(props) => {
             return <ReminderSelect appointments={this.props.data.appointments}   />
           }}>
        //    <Route render={(props) => {
        // return <Reminder reminder={props.reminders}/>
      }} />

           </Route>

           <Route path="/" component={Navigation} />

       </Switch>
     </div>
   </Router>
    </div>
    <div className="container">
      <div className="sky"></div>
      <div className="sea">
      <div className="light"></div>
      </div>
      <div className="sun"></div>
      <div className="bird1"></div>
      <div className="birdr1"></div>
      <div className="bird"></div>
      <div className="birdr"></div>
      </div>


    </div>

)
}

}


export default DisplayContainer;

// if(!props.contacts) {
//   return "loading contacts...."
// }

      // render={(props) => {
      //   const contacts = props.contacts;
      //  return <ContactList contacts = {contacts}/>}}
