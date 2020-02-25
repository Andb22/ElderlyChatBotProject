import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Reminder = (props) => {
  if(!props.reminder){
    return "Looking up your reminders"
  }
return (
  <div>
  <h4>{props.reminder.name}</h4>
  <p>{props.reminder.date}</p>
  <p>{props.reminder.location}</p>
  <p>{props.reminder.time}</p>
  </div>

)
}

export default Reminder;

// return (
//   <div>
//     <h4>{props.contact.name} ({props.contact.nickname})</h4>
//     <p>Phone Number: {props.contact.phoneNumber} </p>
//     <p>Address: {props.contact.address}</p>
//     <p>email: {props.contact.email}</p>
//     <p>Relationship: {props.contact.relationship}</p>
//   </div>
// )
// }
