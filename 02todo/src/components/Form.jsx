import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ listItems, setListItem }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setListItem([...listItems, todo]);
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
