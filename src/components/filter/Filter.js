import React from 'react';
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    event.preventDefault();
    const value = event.currentTarget.value;
    dispatch(addFilter(value))
  }

  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          onChange={handleChangeFilter}
        />
      </label>
    </>
  );
};


