import React, { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [firstRender, setFlag] = useState(true);

  const [filter, setFilter] = useState('');
  useEffect(() => {}, []);

  useEffect(() => {
    if (firstRender) {
      const savedItem = localStorage.getItem('contactList');

      if (savedItem !== 'undefined') {
        const parseContacts = JSON.parse(savedItem);

        if (parseContacts) {
          setContacts(parseContacts);
        }
      }
      setFlag(false);
    } else {
      localStorage.setItem('contactList', JSON.stringify(contacts));
    }
  }, [contacts, firstRender]);


  const handleSubmit = e => {
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];
    const id = nanoid();

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ id, name, number });
    }

    setContacts(contactsLists);
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleChangeFilter  = () => {
    const filteredContatcts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredContatcts;
  };

  const handleDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e));
  };

  return (
    <div
      style={{
        justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
          height: '100%',
          fontSize: 30,
          color: '#010455',
          background: '#888b8d2a',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2> Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <ContactList
        filterArray={handleChangeFilter ()}
        onDelete ={handleDelete}
      />
    </div>
  );
};