import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { fromJS } from "immutable";

const persistedState = localStorage.getItem('todos') ? fromJS(JSON.parse(localStorage.getItem('todos'))) : undefined;
export default createStore(reducer, persistedState);