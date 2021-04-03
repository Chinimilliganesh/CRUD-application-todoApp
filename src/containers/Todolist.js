import React from "react";
import { connect } from "react-redux";
import EditTodos from "./EditTodos";

const Todolist = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "210px",
        margin: "0 auto",
        height: "200px",
        overflow: "auto",
      }}
    >
      {todos.map((todo, i) => (
        <EditTodos key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos
});
export default connect(mapStateToProps)(Todolist);
