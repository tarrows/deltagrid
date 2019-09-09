import { Reducer } from 'redux'

export interface TodoState {
  todos: string[]
}

const initialState: TodoState = {
  todos: []
}

export const ADD_TODO = 'ADD_TODO'
export const addTodo = (todo: string) => ({
  type: ADD_TODO as typeof ADD_TODO,
  payload: { todo }
})
export type Action = ReturnType<typeof addTodo>
const todo: Reducer<TodoState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload.todo] }
    default:
      return state
  }
}

export default todo
