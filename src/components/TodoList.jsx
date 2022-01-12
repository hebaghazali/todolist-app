import React, { useState, useEffect, useMemo } from 'react';

import TodoListField from './TodoListField';
import TodoListFieldEntered from './TodoListFieldEntered';

const TodoList = () => {
  const [list, setList] = useState([]);

  const [num, setNum] = useState(-1);

  const addField = listChild => {
    setNum(num + 1);
    setList([...listChild]);
  };

  const removeField = id => {
    const listClone = [...list];
    listClone.splice(list[id], 1);
    setList([...listClone]);
    setNum(num - 1);
  };

  let listArray = useMemo(() => [], []);

  const [newList, setNewList] = useState([]);

  let set = useMemo(() => {
    return () => {
      setNewList([...listArray]);
    };
  }, [listArray]);

  useEffect(() => {
    listArray.splice(0, listArray.length);
    for (let i = 0; i < num; i++) {
      listArray.push(
        <TodoListFieldEntered
          list={list}
          key={i}
          id={i}
          onRemoveField={removeField}
        />
      );
    }

    set();
  }, [list, listArray, num, set]);

  return (
    <React.Fragment>
      <TodoListField onAddField={addField} />

      <div className='todolists'>{newList}</div>
    </React.Fragment>
  );
};

export default TodoList;
