import React, { useState } from 'react';

import styles from '../styles/todolist-field.module.scss';
import IconCheck from '../images/icon-check.svg';

const TodoList = ({ onAddField }) => {
  const [check, setCheck] = useState(false);
  const [userInput, setUserInput] = useState('');

  const toggleCheck = () => {
    setCheck(!check);
  };

  const changeText = e => {
    e.preventDefault();

    setUserInput(e.target.value);
  };

  const addTodoListField = e => {
    if (e.key === 'Enter') {
      onAddField(e.target.value, check);
      setUserInput('');
    }
  };

  return (
    <React.Fragment>
      <div
        className={styles['todolist-field']}
        style={{ marginBottom: '50px' }}
      >
        <div
          className={`${styles['check-box']} ${check ? styles['checked'] : ''}`}
          onClick={toggleCheck}
        >
          <img src={IconCheck} alt='icon check' />
        </div>
        <input
          type='text'
          placeholder='Create a new todo...'
          value={userInput}
          onChange={changeText}
          onKeyPress={addTodoListField}
        />
      </div>
    </React.Fragment>
  );
};

export default TodoList;
