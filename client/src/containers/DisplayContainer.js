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
         <Route path="/contacts" >
          </Route>
         <Route path="/photos" component={PhotoSlider} >

          </Route>
          <Route path="/puzzles" component={Puzzle}>

           </Route>
           <Route path="/reminders" component={ReminderList}>
        //    <Route render={(props) => {
        // return <Reminder reminder={props.reminders}/>
      }} />

           </Route>

           <Route path="/" component={Navigation} />

       </Switch>
     </div>
   </Router>
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
