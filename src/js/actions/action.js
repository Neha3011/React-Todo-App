import { Map } from "immutable";

export function createTodo(name) {
    return {
        type: 'CREATE_TODO',
        payload: Map({
            id: Date.now(),
            completed: false,
            name: name
        })
    };
}

export function removeTodo(id) {
    return {
        type: 'REMOVE_TODO',
        payload: Map({
            id: id
        })
    }
}

export function removeAllTodos() {
    return {
        type: 'REMOVE_ALL_TODO'
    }
}

export function markTodoCompleted(id) {
    return {
        type: 'MARK_COMPLETED',
        payload: Map({
            id: id
        })
    }
}