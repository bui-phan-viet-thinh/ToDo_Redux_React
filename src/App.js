import React from "react";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import "./App.css";
function App() {
  return (
    <div className="app">
			<h1 className="app-title">My Tasks</h1>
			<AddTodo />
			<TodoList />
		</div>
  );
}

export default App;
