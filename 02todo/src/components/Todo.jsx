import { useState } from "react";
<<<<<<< HEAD
import Form from "./Form";
import TodoList from "./TodoList";
=======
import TodoItem from "./TodoItem";
import Form from "./Form";
>>>>>>> 62a1ed6396c37ab96296284e4032c9177113d7b6

export default function Todo() {
  const [listItems, setListItem] = useState([]);

<<<<<<< HEAD
  return (
    <div>
      <Form listItems={listItems} setListItem={setListItem} />
      <TodoList listItems={listItems} setListItem={setListItem} />
=======
  //   const abc = (e) => setTodo(e.target.value);

  //   console.log(abc);

  return (
    <div>
      <Form />
      {listItems.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
>>>>>>> 62a1ed6396c37ab96296284e4032c9177113d7b6
    </div>
  );
}
