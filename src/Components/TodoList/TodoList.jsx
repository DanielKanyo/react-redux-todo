import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../../Store/Actions/TodoActions';
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
            todos && todos.map(todo => <ListItem handleDelete={this.handleDelete} key={todo.id} id={todo.id} value={todo.text} />)
          }
        </React.Fragment>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);