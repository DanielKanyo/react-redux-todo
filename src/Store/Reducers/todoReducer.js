// const initState = {
//   todos: ['Drink milk' ,'Sleep more']
// }

const ADD = 'ADD_TODO';

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

    default:
      return state;
  }
}

export default todoReducer;