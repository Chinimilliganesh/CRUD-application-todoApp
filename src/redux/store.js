import { createStore, applyMiddleware } from "redux";
import { addTodo } from "./reducer/Todosreducer";
import logger from "redux-logger";

export const store = createStore(addTodo, applyMiddleware(logger));

