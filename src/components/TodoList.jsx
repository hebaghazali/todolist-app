import React, { useState } from 'react';

import TodoListField from './TodoListField';
import TodoListFieldEntered from './TodoListFieldEntered';

const TodoList = () => {
  const [list, setList] = useState([]);

  const addField = (task, check) => {
    setList([
      ...list,
      { input: task, check, id: Math.random().toString(36).slice(2) },
    ]);
  };

  const removeField = id => {
    setList(list.filter(task => task.id !== id));
  };

  return (
    <React.Fragment>
      <TodoListField onAddField={addField} />

      <div className='todolists'>
        {list.map(task => (
          <TodoListFieldEntered
            key={task.id}
            task={task}
            onRemoveField={removeField}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TodoList;
