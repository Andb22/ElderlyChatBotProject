import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactList from '../components/contacts/ContactList';
import Puzzle from '../components/puzzles/Puzzle';
import ReminderList from '../components/reminders/ReminderList.js';
import Reminder from '../components/reminders/Reminder.js'
import Navigation from '../components/navigation/Navigation.js';
import {Link} from 'react-router-dom';
import PhotoSlider from '../components/photos/photo.js';
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
             return <ReminderList reminders={this.props.data.reminders}/>
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
    <div class="container">
      <div class="sky"></div>
      <div class="sea">
      <div class="light"></div>
      </div>
      <div class="sun"></div>
      <div class="bird1"></div>
      <div class="birdr1"></div>
      <div class="bird"></div>
      <div class="birdr"></div>
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
