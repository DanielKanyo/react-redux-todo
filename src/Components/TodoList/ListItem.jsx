import React from 'react';
import PropTypes from 'prop-types';

const completedStyle = {
  textDecoration: 'line-through'
}

const uncompletedStyle = {
  textDecoration: 'none'
}

const ListItem = ({ todo, handleDelete, handleToggle }) => {
  return (
    <div className="list-item">
      <div
        className="todo-text"
        style={todo.completed ? completedStyle : uncompletedStyle}
        onClick={() => { handleToggle(todo.id) }}
      >
        {todo.text}
      </div>
      <div className="delete-btn" onClick={() => { handleDelete(todo.id) }}>x</div>
    </div>
  )
}

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default ListItem;
