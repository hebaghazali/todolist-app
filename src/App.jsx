import React from 'react';

import reset from './styles/reset.module.scss';
import fonts from './styles/fonts.module.scss';
import styles from './styles/image-header.module.scss';
import TodoListContainer from './components/TodoListContainer';

const App = () => {
  return (
    <div className={(reset, fonts)}>
      <header className={styles['header-image']}></header>
      <TodoListContainer />
    </div>
  );
};

export default App;
