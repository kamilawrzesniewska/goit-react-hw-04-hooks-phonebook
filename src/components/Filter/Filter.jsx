import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Filter.module.css';


export class Filter extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };
  

  render() {
    return (
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </label>
    );
  }
}
