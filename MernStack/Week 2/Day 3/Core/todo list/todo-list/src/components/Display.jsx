import React from "react";

const Display = (props) => {
const { todoList, setTodoList } = props;

const handleCompleted = (todo) => {
    todo.markedDelete = !todo.markedDelete;
    setTodoList([...todoList]);
};

const styled = (markedDelete) => {
    return markedDelete === true ? "completed" : "notCompleted";
};

const deleteButton = (idFromBelow) => {
    setTodoList(todoList.filter((todo) => todo.id !== idFromBelow));
};

return (
    <div>
    {todoList.map((todo) => (
        <div className={styled(todo.markedDelete)} key={todo.id}>
        <p>{todo.content}</p>
        <input type="checkbox" onChange={() => handleCompleted(todo)} />
        <button onClick={() => deleteButton(todo.id)}>Delete</button>
        </div>
    ))}
    </div>
);
};

export default Display;
