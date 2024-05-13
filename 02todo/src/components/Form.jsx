import { useState } from "react";
<<<<<<< HEAD
import styles from "./Form.module.css";

const Form = ({ listItems, setListItem }) => {
  const [todo, setTodo] = useState({ name: "", done: false });
=======

export default function Form() {
  const [todo, setTodo] = useState("");
>>>>>>> 62a1ed6396c37ab96296284e4032c9177113d7b6

  function handleSubmit(e) {
    e.preventDefault();
    setListItem([...listItems, todo]);
<<<<<<< HEAD
    setTodo({ name: "", done: false });
  }
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.formInput}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
=======
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
>>>>>>> 62a1ed6396c37ab96296284e4032c9177113d7b6
