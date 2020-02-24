import React from 'react';

const Reminder = (props) => {
  if(!props.reminder){
    return "Looking up your reminders"
  }
return (
  <div>
  <ul className="component-list"></ul>
  </div>

)
}

export default Reminder;
