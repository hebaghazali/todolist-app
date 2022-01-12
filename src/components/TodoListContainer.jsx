import React from 'react';
import Box from '@mui/material/Box';

import styles from '../styles/todolist-box.module.scss';
import Icon from '../images/icon-moon.svg';
import TodoList from './TodoList';

const TodoListContainer = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 541,
          mx: 'auto',
          mt: 8.75,
        }}
      >
        <header className={styles['todo-header']}>
          <p>todo</p>
          <img src={Icon} alt='moon icon' width={26} height={26} />
        </header>

        <TodoList />
      </Box>
    </React.Fragment>
  );
};

export default TodoListContainer;
