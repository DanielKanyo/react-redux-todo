import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../../Store/Actions/TodoActions';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class TodoList extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.text);

    this.setState({
      text: ''
    });
  }

  handleDelete = id => {
    this.props.removeTodo(id);
  }

  handleToggle = id => {
    this.props.toggleTodo(id);
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="todo-input"
            id="text"
            onChange={this.handleChange}
            placeholder="Add todo..."
            value={this.state.text}
          />
        </form>

        <React.Fragment>
          {
            todos && todos.map(todo => {
              return <ListItem key={todo.id} handleDelete={this.handleDelete} handleToggle={this.handleToggle} todo={todo} />
            })
          }
        </React.Fragment>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    removeTodo: id => dispatch(removeTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);