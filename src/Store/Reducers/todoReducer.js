const ADD = 'ADD_TODO';
const REMOVE = 'REMOVE_TODO';
const TOGGLE = 'TOGGLE_TODO';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case REMOVE:
      return state.filter(item => item.id !== action.id);

    case TOGGLE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ) 

    default:
      return state;
  }
}

export default todoReducer;