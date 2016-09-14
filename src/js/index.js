import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { TodoContainer } from "./components/Layout"

import store from "./store"
store.subscribe(()=>{
    localStorage.setItem('todos', JSON.stringify(store.getState()))
});
const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
        <TodoContainer />
    </Provider>
    , app);

