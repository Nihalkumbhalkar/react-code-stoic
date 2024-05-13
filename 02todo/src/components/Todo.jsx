import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [listItems, setListItem] = useState([]);

  return (
    <div>
      <Form listItems={listItems} setListItem={setListItem} />
      <TodoList listItems={listItems} setListItem={setListItem} />
    </div>
  );
}
