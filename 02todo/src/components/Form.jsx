import { useState } from "react";

export default function Form() {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setListItem([...listItems, todo]);
    setTodo("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
