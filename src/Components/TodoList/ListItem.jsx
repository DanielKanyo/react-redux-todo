import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ value, id, handleDelete }) => {
  return (
    <div className="list-item">
      <div>{value}</div>
      <div className="delete-btn" onClick={() => {handleDelete(id)}}>x</div>
    </div>
  )
}

ListItem.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  handleDelete: PropTypes.func
}

export default ListItem;
