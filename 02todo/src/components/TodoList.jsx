import TodoItem from "./TodoItem";
import "./TodoItem.css";

const TodoList = ({ listItems, setListItem }) => {
  return (
    <div className="item-container">
      {listItems.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          listItems={listItems}
          setListItem={setListItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
