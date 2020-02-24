import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ChatbotContainer from './ChatbotContainer';
import DisplayContainer from './DisplayContainer';
import ContactList from '../components/contacts/ContactList';
import Request from '../helpers/request.js';
import firebase from '../firebase/firestore.js'

class MainContainer extends Component{

constructor(props) {
  super(props);
  this.state = {
    contacts: [],
    appointments: [],
    exercises: [],
    medicines: [],
    photos: [],
    listOfSites: String,
    userDetails: String,
    reminders:[{ appointmentDate: "May 10",
  appointmentLocation: "Glasgow High Street",
  appointmentName: "Dentist appointment",
appointmentTime: "2 PM"},
{ appointmentDate: "JUNE 10",
appointmentLocation: "London High Street",
appointmentName: "Postman appointment",
appointmentTime: "8 AM"},
{ appointmentDate: "AUGUST 10",
appointmentLocation: "Bristol High Street",
appointmentName: "Chinese acupuncture appointment",
appointmentTime: "2:37 PM"}]
  }
}


componentDidMount(){
  const request = new Request();
  const contactPromise = request.get('/api/contacts')
  const photoPromise = request.get('/api/photos')



Promise.all([contactPromise, photoPromise])
.then((data) => {
  this.setState({
    contacts: data[0],
    photos: data[1]
  })
})
}


// displays the navigation options if displayType is true
displayNavigation(){
  //const display = props.displayType;
  if (this.state) {
    return <DisplayContainer data ={this.state}/>
  }
  return <ChatbotContainer/>;
}

  render(){

    return (
    <div className ="main-container">
    <h2>I am a Main Container</h2>
    <ChatbotContainer/>
    <DisplayContainer data ={this.state}/>
  </div>
  );
  }
}


export default MainContainer;
