import propTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ filterArray, onDelete  }) => (
  
    <ul className={styles.contactList}>
      {filterArray.map((contact, id) => (
        <li key={id} className={styles.contactItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={styles.btn}
            onClick={() => onDelete (contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>

);

ContactList.propTypes = {
  filterArray: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDelete : propTypes.func.isRequired,
};