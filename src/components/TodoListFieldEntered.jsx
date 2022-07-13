import React, { useState } from 'react';
import styles from '../styles/todolist-field.module.scss';
import IconCheck from '../images/icon-check.svg';
import IconCross from '../images/icon-cross.svg';

const TodoListFieldEntered = ({ task, onRemoveField }) => {
  const [isDone, setIsDone] = useState(false);

  const toggleDone = e => {
    task.check = !task.check;
    setIsDone(!isDone);
    e.target.style = !isDone
      ? 'text-decoration: line-through'
      : 'text-decoration: initial';
  };

  const removeTask = () => {
    onRemoveField(task.id);
  };

  return (
    <div>
      <div className={styles['todolist-field']} id={task.id}>
        <div
          className={`${styles['check-box']} ${
            task.check ? styles['checked'] : ''
          }`}
          onClick={toggleDone}
        >
          <img src={IconCheck} alt='icon check' />
        </div>

        <p onClick={toggleDone}>{task.input}</p>

        <img
          src={IconCross}
          style={{ marginLeft: 'auto', marginRight: '2rem', cursor: 'pointer' }}
          alt=''
          onClick={removeTask}
        />
      </div>
    </div>
  );
};

export default TodoListFieldEntered;
