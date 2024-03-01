import React from 'react';
import Card from './Card';
import contacts from '../contact';
import Avatar from './Avatar';

function App() {
  // console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://th.bing.com/th/id/OIP.tfUH2--rIS1BIHdHC6nktAHaJ4?w=186&h=248&c=7&r=0&o=5&pid=1.7"/>
      <Card name={contacts[0].name} 
        tel={contacts[0].phone} 
        email={contacts[0].email}
        img={contacts[0].imgURL}
      />
      <Card name={contacts[1].name} 
        tel={contacts[1].phone} 
        email={contacts[1].email}
        img={contacts[1].imgURL}
      />
      <Card name={contacts[2].name} 
        tel={contacts[2].phone} 
        email={contacts[2].email}
        img={contacts[2].imgURL}
      />
    </div>
  );
}

export default App;
