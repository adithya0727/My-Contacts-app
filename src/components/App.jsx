import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return <Card
  id = {contact.id}
  key ={contact.id}
  name = {contact.name}
  imgURL = {contact.imgURL}
  phone = {contact.phone}
  email = {contact.email}
  />;

}



function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar imgURL="/now.jpeg"/>
    {contacts.map(createCard)}
      {/* <Card name="Beyonce"
      imgURL=
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone= "+123 456 789"
      email= "b@beyonce.com"/>
      <Card 
        name = {contacts[1].name}
        imgURL = {contacts[1].imgURL}
        phone = {contacts[1].phone}
        email = {contacts[1].email}
      /> */}
    </div>
  );
}

export default App;
