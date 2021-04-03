import React, { useEffect } from "react";
import "./styles.css";
import AddTodos from "./containers/AddTodos";
import Todolist from "./containers/Todolist";
import { deleteAll, persistTodos } from "./redux/action/Todosaction";
import { connect } from "react-redux";
const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
      <AddTodos />
      <Todolist />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(null, mapDispatchToProps)(App);
