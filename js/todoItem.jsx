import React, { useState } from "react";
import classNames from "classnames";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export const TodoItem = (...props) => {
  const [editText, setEditText] = useState("");

  const handleSubmit = event => {
    var val = editText.trim();
    if (val) {
      props.onSave(val);
      setEditText(val);
    } else {
      props.onDestroy();
    }
  };

  const handleEdit = () => {
    props.onEdit();
    setEditText(props.todo.title);
  };

  const handleKeyDown = event => {
    if (event.which === ESCAPE_KEY) {
      setEditText(props.todo.title);
      props.onCancel(event);
    } else if (event.which === ENTER_KEY) {
      handleSubmit(event);
    }
  };

  const handleChange = event => {
    if (props.editing) {
      setEditText(event.target.value);
    }
  };

  const getInitialState = () => {
    setEditText(props.todo.title);
  };

  return (
    <li
      className={classNames({
        completed: props.todo.completed,
        editing: props.editing
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.completed}
          onChange={props.onToggle}
        />
        <label onDoubleClick={handleEdit}>{props.todo.title}</label>
        <button className="destroy" onClick={props.onDestroy} />
      </div>
      <input
        ref="editField"
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};
