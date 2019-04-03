import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTodo from '../../Store/Actions/TodoActions';

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

          <ul>
            {todos && todos.map((todo, i) => <li key={todo.id}>{todo.text}</li>)}
          </ul>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);