import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ filterArray, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {filterArray().map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <span className={styles.paragraph}>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={styles.btn}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filterArray: PropTypes.func.isRequired,
};

