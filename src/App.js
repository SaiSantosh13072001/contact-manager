// import {Routes as Switch, Route} from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";

// const App = () => {
//   return <Layout>
//     <Switch>
//       <Route path="/" element={<Home/>} />
//       <Route path="/login" element={<Login/>} />
//       <Route path="/register" element={<Register/>} />
//     </Switch>
//   </Layout>;
// };

// export default App;

// src/App.js
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactTable';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => setContacts([...contacts, contact]);

  const handleEditContact = (updatedContact) => {
    setContacts(contacts.map(contact => contact.email === updatedContact.email ? updatedContact : contact));
  };

  const handleDeleteContact = (contactToDelete) => {
    setContacts(contacts.filter(contact => contact.email !== contactToDelete.email));
  };

  return (
    <div>
      <h2>Contact Manager</h2>
      <ContactForm onSubmit={handleAddContact} />
      <ContactsTable contacts={contacts} onEdit={handleEditContact} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
