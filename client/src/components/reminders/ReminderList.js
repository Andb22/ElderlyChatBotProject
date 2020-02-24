import React from 'react';

const ReminderList =(props) => {

  if (props.reminders.length === 0){
  	  return "Loading theminders"
  	}
    // const reminders = props.reminders.map((reminder, index) => {
    //   return (
    //     <li key={index} className="compnent-item">
    //     <div className="component">
    //     <Reminder reminder={props.reminders}/>
    //     </div></li>
    //   )
    // })


return (
	  <ul className="component-list">
	    {props.reminders}
	  </ul>
	)
}


export default ReminderList;
