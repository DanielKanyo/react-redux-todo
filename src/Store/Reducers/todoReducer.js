const ADD = 'ADD_TODO';
const REMOVE = 'REMOVE_TODO';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]

    case REMOVE:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]

    default:
      return state;
  }
}

export default todoReducer;