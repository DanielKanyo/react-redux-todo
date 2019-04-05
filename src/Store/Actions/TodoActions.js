let nextTodoId = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const removeTodo = id => {
  nextTodoId--
  
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}