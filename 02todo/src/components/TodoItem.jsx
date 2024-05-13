import "./Todoitem.css";

export default function TodoItem({ item, listItems, setListItem }) {
  function handleDelete(item) {
    console.log("Button is clicked for item :", item);

    setListItem(listItems.filter((todo) => todo !== item));
  }

  function handleComplete(name) {
    console.log("Todo is clicked", name);
  }
  return (
    <div className="item">
      <div className="itemName">
        {" "}
        <span onClick={() => handleComplete(item.name)}>{item.name}</span>{" "}
      </div>
      <div className="itemAction">
        <button onClick={() => handleDelete(item)} className="deleteButton">
          Delete
        </button>
      </div>
    </div>
  );
}
