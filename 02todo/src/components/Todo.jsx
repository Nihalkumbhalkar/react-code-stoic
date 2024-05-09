import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";

export default function Todo() {
  const [listItems, setListItem] = useState([]);

  //   const abc = (e) => setTodo(e.target.value);

  //   console.log(abc);

  return (
    <div>
      <Form />
      {listItems.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
