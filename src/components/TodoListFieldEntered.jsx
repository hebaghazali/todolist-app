import React, { useState, useEffect, useMemo, useRef } from 'react';
import styles from '../styles/todolist-field.module.scss';
import IconCheck from '../images/icon-check.svg';
import IconCross from '../images/icon-cross.svg';

const TodoListFieldEntered = props => {
  const comingList = useMemo(() => [...props.list], []);
  const [newList, setNewList] = useState([]);

  const [check, setCheck] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isDone, setIsDone] = useState(false);

  const InputRef = useRef(null);
  const TaskRef = useRef(null);

  const set = useMemo(() => {
    return () => {
      setNewList(comingList);
      comingList.forEach(task => {
        setCheck(task.check);
        setUserInput(task.input);
      });
    };
  }, [comingList]);

  const toggleDone = e => {
    setCheck(!check);
    setIsDone(!isDone);
    e.target.style = !isDone
      ? 'text-decoration: line-through'
      : 'text-decoration: initial';
  };

  const { onRemoveField } = props;

  const removeTask = () => {
    onRemoveField(TaskRef.current.id);
  };

  useEffect(() => {
    set();
  }, [newList, set]);

  return (
    <div>
      <div className={styles['todolist-field']} id={props.id} ref={TaskRef}>
        <div
          className={`${styles['check-box']} ${check ? styles['checked'] : ''}`}
          onClick={toggleDone}
        >
          <img src={IconCheck} alt='icon check' />
        </div>
        <p onClick={toggleDone} ref={InputRef}>
          {userInput}
        </p>

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
