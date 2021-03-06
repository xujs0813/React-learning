import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
} from "../actions/types";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

let _uid = 0
function getTodos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: _uid++
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = function(state = {}, action){
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: getTodos(state.todos, action)
    }
}
export default todoApp