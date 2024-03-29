import { useState } from "react";
import express = require('express');


export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);


  //middleware huseltiig validate hiine
  // duudah path - route
  // function uuding tsugluulga - controller


  function remove(){


  }

  const [inputValue, setInputValue] = useState("");

  //   function handleChange(e: any) {
  //     setInputValue(e.target.value);
  //   }

  function handleSubmit(props: { value: string }) {
    setTodos((current) => [...current, props.value]);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleSubmit({ value: inputValue })}>
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, key) => (
          <li key={key}>
            <button>{todo}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
