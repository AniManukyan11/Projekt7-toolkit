import "./TodoItem.css";

const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onCheck(props.id);
  };
  return (
    <div className="todo" >
       <label>{props.text}</label>
       
        <button className="delete" onClick={deleteTodo}>DELETE</button>
    </div>
  );
};

export default TodoItem;