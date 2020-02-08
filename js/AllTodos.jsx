import React, { useState } from "react";
import { TodoItem } from "./todoItem.jsx";
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from "./constants";

const ENTER_KEY = 13;

export const AllTodos = ({ state }) => {
  const [editing, setEditing] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const todos = state.get("todos");

  const handleChange = event => setNewTodo(event.target.value);
  const handleNewTodoKeyDown = event => {
    if (event.keyCode !== ENTER_KEY) return;

    event.preventDefault();

    const val = newTodo.trim();

    if (val) {
      todos.push(val);
      state.set({ todos });
      setNewTodo("");
    }
  };

  let main;
  let footer;

  const toggle = todo => {};
  const destroy = todo => {};
  const edit = todo => {
    setEditing(todo.id);
  };
  const save = (todo, newText) => {};
  const cancel = () => setEditing(null);
  const toggleAll = () => {};

  const todoItems = todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={() => toggle(todo)}
      onDestroy={() => destroy(todo)}
      onEdit={() => edit(todo)}
      editing={editing === todo.id}
      onSave={() => save(todo)}
      onCancel={cancel}
    />
  ));

  const activeTodoCount = todos.reduce(function(accum, todo) {
    return todo.completed ? accum : accum + 1;
  }, 0);

  const completedCount = todos.length - activeTodoCount;

  if (activeTodoCount || completedCount) {
    footer = (
      <TodoFooter
        count={activeTodoCount}
        completedCount={completedCount}
        nowShowing={this.state.nowShowing}
        onClearCompleted={this.clearCompleted}
      />
    );
  }

  if (todos.length) {
    main = (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={toggleAll}
          checked={activeTodoCount === 0}
        />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">{todoItems}</ul>
      </section>
    );
  }

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTodo}
          onKeyDown={handleNewTodoKeyDown}
          onChange={handleChange}
          autoFocus={true}
        />
      </header>
      {main}
      {footer}
    </div>
  );
};
