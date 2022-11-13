import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  id: '',
  name: '',
  number: '',
};

export class ContactForm extends React.Component {
  static propTypes = { handleSubmit: PropTypes.func.isRequired };

  state = { ...INITIAL_STATE };

  ident = nanoid();

  render() {
    return (
      <form
        className={styles.form}
        htmlFor={this.ident}
        onSubmit={this.props.handleSubmit}
      >
        <label className={styles.label}>
          Name
          <input
            id={this.ident}
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            id={this.ident}
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}