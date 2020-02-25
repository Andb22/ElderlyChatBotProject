import React from 'react';
import Reminder from './Reminder.js'
import '../../App.css'

const ReminderList =(props) => {
  if (props.reminders.length === 0){
  	  return "Loading theminders"

    const reminders = props.reminders.map((reminder, index) => {
      return (
        <li key={index} className="component-item">
        <div className="component">
        <Reminder reminder={reminder}/>
        </div></li>
      )
 })


return (
	  <ul className="component-list">
	    {props.reminders}
	  </ul>
	)
}
}

export default ReminderList;

// return (
//   <div>
//   <ul className="component-list">
//     <h3>List of contacts</h3>
//     {contacts}
//   </ul>
//   <div style={{'zIndex':99, 'position': 'absolute'}} className="navLinkHome">
//     <a href="/" id="home" >Home</a>
//   </div>
//   </div>
// )
