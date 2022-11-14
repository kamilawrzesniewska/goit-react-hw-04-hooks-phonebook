import propTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <div>
    <label className={styles.label}>Find contacts by Name </label>
    <input
      className={styles.filterInput}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  
};