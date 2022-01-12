import React, { useState, useEffect, useRef } from 'react';

import styles from '../styles/todolist-field.module.scss';
import IconCheck from '../images/icon-check.svg';

const TodoList = props => {
  const [check, setCheck] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  const InputRef = useRef(null);

  const toggleCheck = () => {
    setCheck(!check);
  };

  const changeText = e => {
    e.preventDefault();

    setUserInput(e.target.value);
  };

  const addTodoListField = e => {
    if (e.key === 'Enter') {
      setList([...list, { input: e.target.value, check }]);
    }
  };

  const { onAddField } = props;
  useEffect(() => {
    onAddField(list);
  }, [list]);

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
          ref={InputRef}
        />
      </div>
    </React.Fragment>
  );
};

export default TodoList;
