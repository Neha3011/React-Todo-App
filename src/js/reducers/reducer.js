import { List, Map } from "immutable";

export  default function reducer(state = Map({todos: List()}), action) {
    switch(action.type) {
        case "CREATE_TODO": {
            const todos = state.get('todos');
            const duplicate = state.get('todos').find(todo => todo.get('name') === action.payload.get('name'));
            if(!duplicate)
                return state.set('todos', state.get('todos').push(action.payload));
            return state;
        }

        case "REMOVE_TODO" : {
            return state.set('todos', state.get('todos').delete(action.payload.get('id')));
        }

        case "REMOVE_ALL_TODO" : {
            return state.set('todos', state.get('todos').clear());
        }

        case "MARK_COMPLETED" : {
            const todos = state.get('todos');
            const todo =  todos.map(t => {
                if(t.get('id') === action.payload.get('id')) {
                    return t.update('completed', completed => !completed);
                }
                return t;
            });
            return state.set('todos', todo);
        }
    }
    return state;
};