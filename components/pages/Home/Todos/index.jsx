/* eslint-disable react/prop-types */

const Todos = ({
  title, todos, onSubmit, onClickComplete, onClickDelete, onChangeTitle,
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={title} onChange={({ target: { value } }) => onChangeTitle(value)} />
      <button type="submit">Add</button>
    </form>
    <ul>
      {todos.map(({ id, title: itemTitle, completed }) => (
        <li key={id}>
          <h2>{completed ? <s>{itemTitle}</s> : itemTitle}</h2>
          <button type="button" onClick={() => onClickDelete(id)}>Delete</button>
          <button type="button" onClick={() => onClickComplete(id)}>Complete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Todos;
