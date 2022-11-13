import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};


export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const contactsSaved = localStorage.getItem("contacts");
    if (contactsSaved) {
      const parContatns = JSON.parse(contactsSaved);
      this.setState ({ contacts: parContatns });
    }
  }
  
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const json = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', json);
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { id: nanoid(), name: name, number: number };
    const nameArray = this.state.contacts.map(({ name }) => name);
    if (nameArray.includes(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
      form.reset();
    }
  };


  filterItem = () => {
    const newArray = this.state.contacts.filter(contact => {
      const valueToLow = this.state.filter.toLowerCase();
      return contact.name.toLowerCase().includes(valueToLow);
    });
    return newArray;
  };

  deleteItem = contactID => {
    const index = this.state.contacts.findIndex(
      contact => contact.id === contactID
    );
    const newItem = () => {
      const array = this.state.contacts;
      let newArray = [];
      for (const element of array) {
        if (array.indexOf(element) !== index) {
          newArray.push(element);
        }
      }
      return newArray;
    };
    this.setState(({ i }) => ({ contacts: newItem() }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
render() {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
          height: '100%',
          fontSize: 30,
          color: '#010456',
          background: '#888b8d2a',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} handleChange={this.handleChange} />
        <ContactList onDelete={this.deleteItem} filterArray={this.filterItem} />
      </div>
    );
  }
}